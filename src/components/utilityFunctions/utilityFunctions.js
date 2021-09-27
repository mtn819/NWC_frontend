import { fetchBaseUrl } from "../../config/.env";

export const getSafe = (dict, ...keys) => {
  // safely retrieves dict[k1][k2][k3]..., incase a given dict does not have it.
  if(dict === undefined){
    return undefined;
  }
  let curr = dict;
  for(let k of keys){
    if(curr[k] === undefined){
      return undefined;
    }
    curr = curr[k];
  }
  return curr;
}

export const insert = (dict, key, value) => {
  // insert, into the dict[k], the given value.
  const dict_2 = {...dict};
  dict_2[key] = value;
  return dict_2;
}

// https://stackoverflow.com/questions/18884249/checking-whether-something-is-iterable
function isIterable(obj) {
  // checks for null and undefined
  if (obj == null) {
    return false;
  }
  return typeof obj[Symbol.iterator] === 'function';
}

export const getAllWhere = (dictList, key, value) => {
  // Passed a list of json objects, returns all whose key = value.
  if(!isIterable(dictList)){
    return undefined;
  }
  return dictList.filter(d => d[key] === value);
}

export const getWhere = (dictList, key, value) => {
  // Passed a list of json objects, returns the one whose key = value.
  if(!isIterable(dictList)){
    return undefined;
  }

  return getSafe(getAllWhere(dictList, key, value), 0);
}

export const getText = (data, element) => {
  // IS HARDCODED FOR THE CMS. Used to quickgrab a piece of text from the page.
  return getSafe(
    getWhere(
      getSafe(data, 0, "TEXTFIELD"),
      "ELEMENT",
      element,
    ),
    "CONTENT",
  )
}

export const media2url = med => {
  // translates ugly json to strapi to just the image's url
  return [
    fetchBaseUrl,
    getSafe(med, 0, "url"),
  ].join('');
}

export const renderClass = (element, modifier, condition) => {
  /**
   * Passed "block", "on", v => v > 5,
   * will return "block--on" if v > 5.
   */
  if(condition()){
    return `${element} ${element}--${modifier}`
  }
  return element;
}
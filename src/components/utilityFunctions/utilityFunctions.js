export const getSafe = (dict, ...keys) => {
  // safely retrieves dict[k1][k2][k3]..., incase a given dict does not have it.
  let curr = dict;
  for(let k of keys){
    if(curr[k] === undefined){
      return undefined;
    }
    curr = curr[k];
  }
  return curr;
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
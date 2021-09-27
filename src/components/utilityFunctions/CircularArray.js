export class CircularArray {
  constructor(items, curr=0) {
    this.curr = curr;
    this.items = items;
  }
  get(i=this.curr) {
    if(i < 0){
      return this.items[this.items.length + (i % this.items.length)];
    }
    return this.items[i % this.items.length];
  }
  getTrio() {
    return [
      this.get(this.curr-1),
      this.get(this.curr),
      this.get(this.curr+1),
    ]
  }
  next() {
    return new CircularArray(this.items, this.curr+1);
  }
  prev() {
    return new CircularArray(this.items, this.curr-1);
  }
}
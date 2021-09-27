export class CircularArray {
  constructor(items) {
    this.curr = 0;
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
    this.curr += 1;
  }
}
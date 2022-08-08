class Card {
  constructor(name) {
    this.name = name
    this.type
  }

  set attr(type) {
    return this.type = type;
  }
  get attr() {
    return this.type;
  }
  // getName() {
  //   return this.name
  // }
  // getType() {
  //   return this.type
  // }
  // getAtk() {
  //   return this.atk
  // }
  // getDef() {
  //   return this.def
  // }
}
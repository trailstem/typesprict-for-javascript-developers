export {};

//静的メンバ
class Me {
  static isProgrammer: boolean = true;
  static firstName: string = "coco";
  static lastName: string = "coco";

  static work() {
    // "hey guys are you intersterd in typescript";
    return `hey guys this is ${this.firstName} are you intersterd in typescript`;
  }
}

// let me = new Me();
// console.log(me.isProgrammer);
console.log(Me.isProgrammer);
console.log(Me.work());
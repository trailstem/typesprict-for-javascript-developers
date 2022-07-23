export {};

class VisaCard {
  //読み取り専用
  // readonly owner: string;

  constructor(public readonly owner: string) {}
}

let myVisaCard = new VisaCard("coco");
console.log(myVisaCard.owner);
// myVisaCard.owner = "coco"

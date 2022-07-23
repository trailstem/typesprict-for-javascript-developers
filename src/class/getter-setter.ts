export {};

/*
「owner」
所有者
初期時に設定できる
途中変更できない
参照できる

「secretNumber」
個人番号
初期化時に設定できる
途中変更できる
参照できない
*/

class MyNumberCard {
  private _owner: string;
  private _secretNumber: number;
  constructor(owner: string, secretNumber: number) {
    this._owner = owner;
    this._secretNumber = secretNumber;
  }

  //getter
  get owner() {
    return this._owner;
  }
  //setter
  set secretNumber(secretNumber: number) {
    this._secretNumber = secretNumber;
  }
}

let card = new MyNumberCard("ike", 1234567890);
// card.owner = "ahm";
card.secretNumber = 123;

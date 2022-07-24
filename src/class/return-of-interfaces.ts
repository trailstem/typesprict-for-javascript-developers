export {};

/*
抽象クラスは多重継承ができない
interfaceは多重継承が可能
*/

class Mahotsukai {}
class Souryo {}

//単一クラスのみ継承可能
// class Taro extends Mahotsukai, Souryo{}

interface Kenja {
  name: string;
  ionazun(): void;
}

interface Senshi {
  kougeki(): void;
}

class Jiro implements Kenja, Senshi {
  constructor(public name: string) {}
  ionazun(): void {
    console.log("ionazun");
  }
  kougeki(): void {
    console.log("kougeki");
  }
}

const jiro = new Jiro("ike");
jiro.ionazun();
jiro.kougeki();

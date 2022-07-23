export {};
//namespace 名前空間
//同一クラスを作成したい場合にフォルダのように別名をつけることで宣言できるようになる。

namespace Japanese {
  export namespace Tokyo {
    //namespaceの際 export必要
    export class Person {
      constructor(public name: string) {}
    }
  }

  export namespace Osaka {
    export class Person {
      constructor(public name: string) {}
    }
  }
}

namespace English {
  export class Person {
    constructor(
      public firstName: string,
      public middleName: string,
      public lastName: string
    ) {}
  }
}

const me = new Japanese.Tokyo.Person("coco");
const you = new Japanese.Osaka.Person("COCO");
console.log(me.name);
console.log(you.name);

const michael = new English.Person("michael", "joseph", "jackson");

console.log(michael);

export {};

//初期化処理省略
class Person {
  ///アクセス修飾子の省略
  constructor(public name: string, protected age: number) {}
}

const me = new Person("ike", 5);
console.log(me);

//コンスラクタに初期値でアクセス修飾子を指定することで、初期化ができるようになる。

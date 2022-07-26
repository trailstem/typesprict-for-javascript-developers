export {};

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

let taro = new Person("taro", 30);
console.log(taro);

type PersonType = typeof Person;

//コンストラクタの引数の型が新しく生成
type Profile = ConstructorParameters<PersonType>;

const profile: Profile = ["ham", 34];
const ham = new Person(...profile);

console.log(ham);

//extends は型の互換性があるかどうかを調べる
type MyConstructorParameters<T extends abstract new (...args: any) => any> =
  T extends abstract new (...args: infer P) => any ? P : never;

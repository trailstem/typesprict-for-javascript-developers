export {};
class Person {
  public name: string;
  //personクラスだけで呼び出せる
  protected age: number;
  //_
  protected nationality: string;
  //コンスラクタ、returnしないのでconstructの型はなし
  constructor(name: string, age: number, nationality: string) {
    this.name = name;
    this.age = age;
    this.nationality = nationality;
  }
  //getter
  profile(): string {
    return `name:${this.name} age:${this.age}`;
  }
}


class Android extends Person {
  constructor(name: string, age: number, nationality: string) {
    super(name, age, nationality);
  }
  profile(): string {
    return `name:${this.name} age:${this.age}, nationality:${this.nationality}`;
 
  }
}

let taro = new Person("Taro", 33, "Japan");
console.log(taro.profile());
console.log(taro.name);
// console.log(taro.age);
// let hanako = new Person();

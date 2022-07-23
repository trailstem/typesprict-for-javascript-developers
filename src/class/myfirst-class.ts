export {};
class Person {
  name: string;
  age: number;
  //コンスラクタ、returnしないのでconstructの型はなし
  constructor(name : string, age : number) {
    this.name = name;
    this.age = age;
  }
  profile() : string{
    return `name:${this.name} age:${this.age}`
  }
}

let taro = new Person("Taro", 33);
console.log(taro.profile());
// let hanako = new Person();

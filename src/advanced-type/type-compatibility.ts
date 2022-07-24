export {};
//型の互換性

let fooCompatible: any;
let barCompatible: string = "typescript";

console.log(typeof fooCompatible);
fooCompatible = barCompatible;

//any型がstring型に変換
console.log(typeof fooCompatible);

let fooInCompatible: string;
let barInCompatible: number = 1;

// //型互換性ない
// fooInCompatible = barInCompatible;

let fooString: string;
let barString: string = "string";
fooString = barString;

let fooStringLiteral: "fooStringLiteral" = "fooStringLiteral";
//文字列リテラル型は文字列型の一部と認識される為、代入可能
fooString = fooStringLiteral;
///////////////////////////////
let fooNumber: number;
let fooNumberLiteral: 2000 = 2000;
fooNumber = fooNumberLiteral;
///////////////////////////////
/*
オブジェクト間の型評価は、オブジェクト内のメンバ同士の型が一致しているかを判定する
*/

//構造的部分型
interface Animal {
  age: number;
  name: string;
}
class Person {
  constructor(public age: number, public name: string) {}
}
let me: Animal;
me = new Person(22 ,"ike");

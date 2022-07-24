export {};

//ｼﾞェネリクス

// const echo = (arg: number): number => {
//   return arg;
// };

// const echo = (arg: string): string => {
//   return arg;
// }

//抽象的な型を指定する、慣習として[T]
const echo = <T>(arg: T): T => {
  return arg;
};

//number型を指定
console.log(echo<number>(100));
//string型を指定
console.log(echo<string>("hello!!!"));
//boolean型を指定
console.log(echo<boolean>(true));

//クラスから型を抽象化している
class Mirror<T> {
  constructor(public value: T) {}
  echo(): T {
    return this.value;
  }
}

console.log(new Mirror<number>(1234).echo());
console.log(new Mirror<string>("hello generics!!").echo());
console.log(new Mirror<boolean>(true).echo());

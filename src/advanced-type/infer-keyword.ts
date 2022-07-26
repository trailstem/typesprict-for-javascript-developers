export {};

//関数の戻り値の方を返す

function add(a: number, b: number): number {
  return a + b;
}

console.log(add(1, 2));
//関数の戻り値の方を返す
type ReturnTypeFromAdd = ReturnType<typeof add>;

type MyReturnType<T extends (...args: any) => any> = T extends (
  ...args: any
) => infer R
  ? R
  : any;

  //infer 条件の一部としてジェネリクス型で定義できる。
  //型推論した結果Rに入れる。
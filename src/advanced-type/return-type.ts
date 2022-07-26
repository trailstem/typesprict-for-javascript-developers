export {};

//関数の戻り値の方を返す

function add(a: number, b: number): number {
  return a + b;
}

console.log(add(1, 2));
//関数の戻り値の方を返す
type ReturnTypeFromAdd = ReturnType<typeof add>;

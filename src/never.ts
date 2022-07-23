export {};

//voidは値が戻ってくる
//neverは戻ってこない

//return なので関数返却がない
//よびもとに戻ってこまい場合のnever
function error(message: string): never {
  throw new Error(message);
}

try {
  //例外が起こってしまったので実行なし
  let result = error("test");
  console.log(result);
} catch (error) {
  console.log(error);
}

let foo : void = undefined
let bar  : never = error("only message"); 


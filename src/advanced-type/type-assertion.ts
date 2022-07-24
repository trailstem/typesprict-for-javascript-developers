export {};

//アサーション

let name: any = "ham";

//代入前に型指定をする
let length = (name as string).length;
//以下の記法は非推奨
// let length  = (<string>name).length;
// length = "foo";

console.log(length);

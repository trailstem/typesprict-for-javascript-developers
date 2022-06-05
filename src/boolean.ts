//exportJavascriptをモジュールシステムを導入していない場合、
//グローバル空間に変数が定義される。そこでどこかに宣言しているnameと衝突しているので、エラーが起こる。
//解決は、このシステムをモジュール化することで回避できる。
export {};

let name: string = "typescript";


let isFinished: boolean = true;
// isFinished = 1;
console.log({ isFinished });


export {};

//litetal は予期しない値を弾くことができる。

let dayOfWeek: "日" | "月" | "火" | "水" | "木" | "金" | "土" = "日";
dayOfWeek = "月";
// dayOfWeek = "89";

let month: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 = 1;
month = 12;
// month = 13;

//boolean型より硬い型指定
let TRUE :true = true;
// TRUE = false;
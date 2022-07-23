export {};

//オプショナルな引数[?]を記載する
//[?]をつけるとあってもなくてもいい引数が生成できる。

let bmi: (w: number, h: number, printable?: boolean) =>  number = (w: number, h: number, printable? : boolean) => {

if (printable) {
  console.log("printable")
}
return w / (h * h);
}

bmi(1.99, 76,false);

//bmi (身長、体重,console.logで出力するかどうか)
// bmi (1,22, true)
// bmi (1,22, false)
// bmi (1,22)

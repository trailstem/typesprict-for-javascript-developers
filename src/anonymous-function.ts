export {};

//関数の返り値を入れる変数にも型指定ができる。
let bmi : (weight: number, height: number) => number
= function (weight :number,height :number) : number{
  return weight / (height * height);
}

console.log(bmi(1,49));
export {};

//引数がない場合の初期値指定
const nextYear = (c: number, r: number = 1.1) => {
  return c * r;
};

console.log(nextYear(444,44));

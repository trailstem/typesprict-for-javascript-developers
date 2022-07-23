export {};

//タイプガード
const kansu = ():number => 43;

let numberAny : any = kansu();
let numberUnknown : unknown = kansu();

let sumAny = numberAny + 10;
console.log(typeof numberUnknown)

//unknown型
// let sumUnknown = numberUnknown + 10;
// この書き方でもできる。
let sumUnknown = typeof(numberUnknown) + 10;

//typeofを使用して型安全ガードを使用して安全にコード記載する。
if (typeof numberUnknown === 'number') {
  let sumUnknown = numberUnknown + 10;
}

console.log(sumUnknown)


export {};

//別名の型作成
type Mojiretsu = string;

const fooString: string = "hello";
const fooMojiretsu: Mojiretsu = "mozi";
//
type Profile =  {
  name: string;
  age: number;
}
const example : Profile = {
  name: "example",
  age: 22,
};


//事前にある型を流用することができる。
type Profile2 = typeof example;


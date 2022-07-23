export {};
//オブジェクト型

let profile1: object = { name: "ike" };
profile1 = { birthYear: 1976 };

//{}プロパティについての型指定
let profile2: {
  name: string;
} = { name: "ike" };
profile2 = { name: "popo" };

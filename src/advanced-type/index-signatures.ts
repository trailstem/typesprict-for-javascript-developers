export {};


//オブジェクトの添字に対する型注釈----------------

interface Profile {
  name : string;
  underTwenty : boolean;
//[index:string]: キーを明示的に指定しなくてもこの記載で定義することができる。
 [index:string]: string | number | boolean
}
 
let profile: Profile = {name : "ham",underTwenty: true}

//How to write index
//{ [index : typeForIndex ]: typeForValue }


//オブジェクトに指定していないage nationalityが定義できている・
profile.name = "Ham";
profile.age = 43;
profile.nationality = "Japan"

// console.log(profile[1]);
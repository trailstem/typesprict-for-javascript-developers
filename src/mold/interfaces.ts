export {};
//alias と同様にオブジェクトに型をつけることができる。 

//別名
type ObjectType = {
  name: string;
  age: number;
};

//interface
interface ObjectInterface {
  name: string;
  age: number;
}

let object: ObjectInterface = { name: "true", age: 22 };

export {};

//全て定数化、readonlyにしたい場合、[as const]

let name = "atsushi";

name = "coco";

let nickname = "coco" as const;

// coco型になる為、代入不可能
// nickname = "cocotaro";

nickname = "coco";

let profile = {
  name: "ccc",
  height: 190,
} as const;

// //readonly修飾子がつく
// profile.name = "bbb";
// profile.height = 100;

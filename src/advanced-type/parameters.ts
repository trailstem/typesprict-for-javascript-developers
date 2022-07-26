export {};

const debugProfile = (name: string, age: number) => {
  console.log({ name, age });
};

debugProfile("ham", 23);

//関数の引数の型が取得できる。
type Profile = Parameters<typeof debugProfile>;

const profile: Profile = ["coco", 3];

debugProfile(...profile);

type MyParameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never;
export {};

// const sum = {...values} => {
//   console.log(values);
// };

// sum(1,2,3,4,5) 

//配列のアノテーションをすればいい
const sum :(...values: number[]) => number
= (...values : number[]) :number => {
  console.log(values);
  return 100;
};

sum(1,2,3,4,5) 
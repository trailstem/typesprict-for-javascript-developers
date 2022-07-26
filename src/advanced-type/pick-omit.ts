export {};

type Detailprofile = {
  name: string;
  height: number;
  weight: number;
};

type SimpleProfile = Pick<Detailprofile, "name" | "weight" | "height">;
type SmallProfile = Omit<Detailprofile, "height">;

// type MyOmit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;

type MyOmit = Pick<Detailprofile, "name" | "weight">;
type MySmallProfile = MyOmit;

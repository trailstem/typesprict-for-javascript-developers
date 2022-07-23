export {};

// intersection型は複数の型を＝結合して新規作成できる。

type Pitcher1 = {
  throwwingSpeed: number;
};

type Batter1 = {
  batterAverage: number;
};

const DaimajinSasaki: Pitcher1 = {
  throwwingSpeed: 100,
};

const OchiaiHiromitsu: Batter1 = {
  batterAverage: 1,
};

// type TwoWayPlayer = {
//   throwwingSpeed: number;
//   batterAverage: number;
// };

type TwoWayPlayer = Pitcher1 & Batter1;

const OtaniShohei : TwoWayPlayer = {
  throwwingSpeed: 100,
  batterAverage: 1,
}
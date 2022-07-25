export {};

//
type Prefectures = "tokyo" | "chiba" | "tottori";

type Covid19InfectionInfo = {
  kanji_name: string;
  confirmed_cases: number;
};

//各県に対して共通の型を持っている。
/*
同じようなコードを複数指定しる場合は Record型を使用した方がコードが簡潔になる
*/
const Covid19Japan: Record<Prefectures, Covid19InfectionInfo> = {
  tokyo: { kanji_name: "東京", confirmed_cases: 1960 },
  chiba: { kanji_name: "千葉", confirmed_cases: 240 },
  tottori: { kanji_name: "鳥取", confirmed_cases: 2 },
};

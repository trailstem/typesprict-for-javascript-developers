export {};

//関数の型指定
type DebugType = () => void;

type SomeTypes = string | number | DebugType;

//第一引数に削除したい型 実際に引数に消したい型を記載
type FunctionType = Exclude<SomeTypes, string | number>;
type NunFunctionType = Exclude<SomeTypes, DebugType>;
type TypeExfludingFunction = Exclude<SomeTypes, Function>;

//抽出する
type FunctionTypeByExtract = Extract<SomeTypes, DebugType>;

type NunFunctionTypeByExtract = Extract<SomeTypes, string | number>;

type FunctionTypeExtractingFunction = Extract<SomeTypes, Function>;

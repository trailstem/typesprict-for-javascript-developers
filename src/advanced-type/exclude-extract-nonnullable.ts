export {};

//関数の型指定
type DebugType = () => void;

//
type SomeTypes = string | number | DebugType;

//第一引数に削除したい型 実際に引数に消したい型を記載
type FunctionType = Exclude<SomeTypes, string | number>;
type NunFunctionType = Exclude<SomeTypes, DebugType>;

//大文字Functionで関数の型の総称、様々な関数の型を制限する。
type TypeExcludingFunction = Exclude<SomeTypes, Function>;

//抽出する 第二引数に指定した値だけ、抽出することができる。
type FunctionTypeByExtract = Extract<SomeTypes, DebugType>;
type NunFunctionTypeByExtract = Extract<SomeTypes, string | number>;
type FunctionTypeExtractingFunction = Extract<SomeTypes, Function>;

//nonnullable、ユニオン型からnull,undifinedを削除してくれる。

type NullableTypes = string | number | null | undefined;
type NonNullableTypes = NonNullable<NullableTypes>;

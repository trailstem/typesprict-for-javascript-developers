export {};



// type MyExclude<T, U> = T extends U ? never : T;
type MyExclude= 
| (string extends  string | number ? never : string)
| (number extends  string | number ? never : number)
| (DebugType extends  string | number ? never : DebugType);
type DebugType = () => void;
type SomeTypes = string | number | DebugType;
type FunctionType = Exclude<SomeTypes, string | number>;
type MyFuntionType = MyExclude;


type FunctionTypeByExtract = Extract<SomeTypes, DebugType>;

type NullableTypes = string | number | null | undefined;
type NonNullableTypes = NonNullable<NullableTypes>;

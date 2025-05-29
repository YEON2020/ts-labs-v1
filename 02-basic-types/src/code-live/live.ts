// 타입스크립트 기본 타입

// (1) number
// : number -> "타입 어노테이션"
let num: number = 123; // 123은 숫자형 리터럴 -> 타입스크립트는 숫자라고 판단 : 타입 추론
num = -123;
num = 0.123;
num = -0.123;
num = 123.132;

// (2) 문자열
let str: string = "Hello";
str = `${num}`;

// str =123;
str.toUpperCase();
//str.toFixed();

// (3) boolean
let bool: boolean = true;
// bool = "false";

// (4) null
let nullVal: null = null;
//nullVal = "";
// nullVal = undefined;

// (5) undefined
let undefinedVal: undefined;

undefinedVal = undefined;
// undefinedVal = null;

// (6) 값 자체가 타입
let literalVal: "Hello"; // 타입 어노테이션
literalVal = "Hello";
// literalVal = "hi";

// (7) any 타입과 unknown 타입
// any : 뭐든지 허용하고 바로 사용 가능
// unknown : 안전한 any(바로 사용 X)
// 대부분의 경우에는 unknown 쓰는 게 안전하다.(권장)

let a: any = 123;
a = "";
a = {};

let b: unknown = 123;
b = "";
b = {};

// 타입가드를 사용하면 사용 가능
// unknown 타입은 타입을 확인하기 전까지는 사용을 제한함.
if (typeof b === "string") {
  b.toUpperCase();
}

// (8) void 타입
// 반환값이 없다라는 의미

function returnHello(): string {
  return "Hello";
}

function sayHello(): void {
  console.log("Hello");
  // return undefined;
  // return;
}

function echoMsg(msg: string): string {
  return msg;
}

// (9) never : 어떤 값도 담을 수 없는 타입

let neverVal: never;

function throwError(msg: string): never {
  throw new Error();
}

function infiniteLoop(): never {
  while (true) {
    console.log("...");
  }
}

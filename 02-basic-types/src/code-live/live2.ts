// 타입 추론
// 타입을 명시하지 않아도 타입스크립트가 알아서 타입을 추론하는 것
// : 추론할 단서(=값)가 있으면 추론이 됨.

let a = 1; // 타입 추론이 되서 정적 타입으로 지정
a.toFixed();
a.toExponential();
// a = "hello"; // 문자열 할당 X

let b = "Hello"; // 문자열로 타입 추론
// b = 123;
let c = true;
let d = {};
let e;

// 구조 분해 할당
let user: {
  name: string;
  age: number;
};
user = {
  name: "안연수",
  age: 30,
};

let { name, age } = user;
let [todo, done] = ["청소하기", false];

// 함수
function sayHello() {
  console.log("Hello");
}

function returnHello() {
  return "Hello";
}

// 추론의 단서 X
function add(a: unknown, b: unknown) {
  // 타입 가드
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  }
}

//매개값이 없을 경우 기본값, 기본값을 지정하면 추론 가능
function add2(a = 1, b = 2) {
  return a + b;
}

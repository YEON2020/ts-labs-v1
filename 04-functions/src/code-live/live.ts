// 함수 선언
// (1) 함수 선언식
// (2) 함수 표현식, 변수 = 함수(값)
// (3) 화살표 함수

function add(a: number, b: number): number {
  return a + b;
}

const sub = function (a: number, b: number): number {
  return a - b;
};
sub(8, 5);

const multiply = (a: number, b: number): number => a * b;

// 선택적 매개변수
function log(msg: string, userName?: string): void {
  if (userName) {
    console.log(`${userName}: ${msg}`);
  } else {
    console.log(`${msg}`);
  }
}

log("Hello World!");
log("Hello World!", "안연수");

// 나머지 매개변수 ...
function sumAll(...nums: number[]) {
  return nums.reduce((acc, cur) => acc + cur, 0);
}

sumAll(4, 5);
sumAll(4, 5, 8);
sumAll(4, 5, 8, 9);

// 함수 = 값
// 직접 함수 타입을 지정하는 방식

type OP = (a: number, b: number) => number;

function compute(a: number, b: number, op: OP) {
  return op(a, b);
}

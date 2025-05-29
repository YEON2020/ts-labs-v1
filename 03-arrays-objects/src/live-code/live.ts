// 1. 배열

// 숫자형 배열
let numbers: number[] = [1, 2, 3];
numbers.push(1);
numbers.unshift(0);

console.log(numbers);

// let number2: Array<number> = [1,2,3];

// 문자열 배열
let fruits: string[] = ["바나나", "사과", "키위"];

let flexArr: (number | string | boolean)[] = [1, "2", "3", 4, true, false];

// 2차원 배열
let twoDimArr: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
];

let twoDimArr2: (string | number)[][] = [
  ["1", "2", "3"],
  [1, 2, 3],
];

// 2. 튜플
// 길이와 타입이 고정된 특수 배열

let tuple: [number, string] = [10, "20"];

tuple.push(1);
tuple[0] = 2;

// readonly : 읽기 전용
let tuple2: readonly [number, string] = [1, "Hello"];
// tuple2.push(1); (X)
// tuple2 = [2, "GoodBye"]; // 재할당 가능

const tuple3: [number, string] = [1, "Hello"];
//tuple3 = [2, "GoodBye"];
tuple3.push(1);

const users: [number, string][] = [
  [1, "안연수"],
  [2, "SANSAN"],
];

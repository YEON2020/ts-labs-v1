// 객체

let user: { id: number; name: string } = {
  id: 1,
  name: "안연수",
};

let student: {
  name: string;
  age: number;
  scores: [string, number][];
};

student = {
  name: "안연수",
  age: 30,
  scores: [
    ["자바스크립트", 50],
    ["자바", 70],
  ],
};

// 선택적 프로퍼티
let product: {
  id: number;
  name: string;
  price: number;
  description?: string;
};

product = {
  id: 1,
  name: "아이폰17",
  price: 800000,
};

// Readonly 속성
let order: {
  userId: number;
  status: string;
  amount: number;
  readonly createdAt: string;
};

order = {
  userId: 1,
  status: "배송중",
  amount: 130000,
  createdAt: "2025-05-29",
};

order.status = "배송완료";

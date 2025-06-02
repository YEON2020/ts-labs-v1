// 타입 좁히기 (Type Narrowing), 패턴

function printSomething(value: string | number) {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else {
    console.log(value.toFixed);
  }
}

// 타입 좁히기 패턴
// (1) typeof
// (2) null checks
// (3) in
// (4) discriminated union (=tagged union)
// (5) 타입 가드 함수
// (6) instanceof

// 2. null checks
type User = { id: number; name: string; email?: string };

// 선택적 매개변수
// api => user (X)
function printUserProfile(user?: User) {
  if (!user) {
    return;
  }
  if (user.email) {
    console.log(`ID: ${user.id}, 이름: ${user.name}, 이메일: ${user.email}`);
  } else {
    console.log(`ID: ${user.id}, 이름: ${user.name}`);
  }
}

console.log(printUserProfile({ id: 1, name: "안연수" }));

// in vs discriminated union(Tagged union, 서로서 유니온)

// type SuccessResponse = { ok: true; data: string };
// type ErrorResponse = { ok: false; error: string };

type SuccessResponse = { data: string };
type ErrorResponse = { error: string };
type ApiResponse = SuccessResponse | ErrorResponse;

// function handleResponse(response: ApiResponse) {
//   if (response.ok) {
//     console.log(response.data);
//   } else {
//     console.log(response.error);
//   }
// }

function handleResponse2(response: ApiResponse) {
  if ("data" in response) {
    console.log(response.data);
  } else {
    console.log(response.error);
  }
}

// 타입 가드 함수
type Guest = { kind: "guest"; visitReason: string };
type Member = { kind: "member"; memberId: string };
type Person = Guest | Member;

// 특수 문법 : is
// member가 true이면 Member 알려줌
function isMember(person: Person): person is Member {
  return person.kind === "member";
}

function printPersonInfo(person: Person) {
  if (isMember(person)) {
    // 회원
    console.log(`회원 ID: ${person.memberId}`);
  } else {
    // 손님
    console.log(`방문 이유: ${person.visitReason}`);
  }
}

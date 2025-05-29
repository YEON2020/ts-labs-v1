// 열거형(enum)
// 정해진 값들만 사용하는 타입(한정할 때)

// (1) 가독성 향상
// (2) 오류 방지
enum Role {
  ADMIN = 0,
  USER = 1,
  GUEST = 2,
}

let user: {
  name: string;
  role: Role;
};

// user = {
//   name: "안연수",
//   role: "admin",
// };

user = {
  name: "안연수",
  role: Role.ADMIN,
};

enum Status {
  Pending = "pending",
  Success = "success",
  Reject = "reject",
}

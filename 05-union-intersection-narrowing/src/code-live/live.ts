// 1. 유니온 타입 '|'
// 여러 타입 중 하나만 만족

let value: number | string | boolean = 2;
value = "Hello";
value = true;

// 2. 인터섹션 타입 '&'

type Person = { name: string };
type Developer = { skills: string[] };
type DevOrPerson = Person | Developer;
type DevPerson = Person & Developer;

const personA: DevOrPerson = {
  name: "안연수",
  skills: ["java", "javascirpt"],
};

const personB: DevPerson = {
  name: "안연수",
  skills: ["java", "javascript"],
};

// 5. Mapped Type
// 맵드 타입은 기존 타입을 기반으로 새로운 타입을 만들 때 사용됩니다.
// 인덱스 시그니처와 달리, 맵드 타입은 키의 집합을 제한할 수 있습니다.
type User = {
  id: number;
  name: string;
  email: string;
};
type UserRecord = {
  [key in "admin" | "user" | "guest"]: User;
};

// 6. Record
// 맵드 타입을 좀더 간결하게 유틸리티 타입 중 하나인 레코드 타입으로 보다 가독성있고 간단하게 나타낼 수 있습니다.
// 동일한 타입을 가지는 여러 속성을 정의할 때 유용. 반복되는 구조를 간결하게 표현할 수 있음.

// type User = {
//   id: number;
//   name: string;
//   email: string;
// };

// type UserRecord = Record<"admin" | "user" | "guest", User>;

// const users: UserRecord = {
//   admin: { id: 1, name: "Alice", email: "alice@example.com" },
//   user: { id: 2, name: "Bob", email: "bob@example.com" },
//   guest: { id: 3, name: "James", email: "james@example.com" },
// };

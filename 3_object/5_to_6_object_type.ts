// 5. Mapped Type
type User = {
  id: number;
  name: string;
  email: string;
};
type UserRecord = {
  [key in "admin" | "user" | "guest"]: User;
};

// 6. Record
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

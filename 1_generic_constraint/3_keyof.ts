type PersonType = {
  name: string;
  age: number;
  location: string;
};

type PersonKeys = keyof PersonType; // "name" | "age" | "location"

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const person: PersonType = {
  name: "John",
  age: 30,
  location: "New York",
};

const personName = getProperty(person, "name");
const personAge = getProperty(person, "age");
// const personAge = getProperty(person, "height");

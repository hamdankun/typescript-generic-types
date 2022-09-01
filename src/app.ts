// Code goes here!

// currently
const names: Array<string> = ["Naruto", "Sasuke", "Sakura"];

const promise = new Promise<string>((resolve) => resolve("Hello World"));

promise.then((response) => console.log(response));

// Generic Function &  constraints
function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const data = merge<{ name: string }, { age: number }>(
  { name: "Naruto" },
  { age: 30 }
);

// another generic function

interface Lenghty {
  length: number;
}

function countAndDescribe<T extends Lenghty>(element: T): [T, string] {
  let desc = "Go No Value";

  if (element.length == 1) {
    desc = "Got 1 element";
  } else if (element.length > 1) {
    desc = `Got ${element.length} Elements`;
  }

  return [element, desc];
}

countAndDescribe("Naruto");
countAndDescribe("Sasuke");
countAndDescribe(["Naruto", "Sasuke"]);

// keyof on generic

function extractDataFromObject<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return `Value ${obj[key]}`;
}

extractDataFromObject({ name: "Naruto" }, "name");

// generic in classes
class StorageData<T> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return this.data;
  }
}

const storageTexts = new StorageData<string>();

storageTexts.addItem("Naruto");
storageTexts.addItem("Sasuke");
storageTexts.addItem("Sakura");

const storageNumber = new StorageData<number>();

storageNumber.addItem(1);
storageNumber.addItem(2);
storageNumber.addItem(3);

class Validation<Field extends object> {
  set(name: keyof Field, value: string) {
    console.log(name, value);
  }
}

const validaton = new Validation<{ fistName: string; lastName: string }>();

// generice types utils

// Partial
interface CourseGoal {
  title: string;
  desc: string;
  completeUntil: Date;
}

function createCourseGoal(
  title: string,
  desc: string,
  completeUntil: Date
): CourseGoal {
  const courseGoal: Partial<CourseGoal> = {};

  courseGoal.title = title;
  courseGoal.desc = desc;
  courseGoal.completeUntil = completeUntil;

  return courseGoal as CourseGoal;
}

// Readonly

const readonlyNames: Readonly<string[]> = ["Naruto", "Sasuke"];

// readonlyNames.push('Hallo') // error

// Record

interface CatInfo {
  age: number;
  breed: string;
}

type CatName = "miffy" | "boris" | "mordred";

const cats: Record<CatName, CatInfo> = {
  miffy: { age: 10, breed: "AA" },
  boris: { age: 10, breed: "AA" },
  mordred: { age: 10, breed: "AA" },
};

// Pick
interface TodoPick {
  title: string;
  desc: string;
  completed: string;
}

type TodoPreview = Pick<TodoPick, "title">;

const todoPickTitle: TodoPreview = {
  title: "Hallo",
};

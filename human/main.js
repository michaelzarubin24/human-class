import {
  Human,
  Developer,
  Doctor,
  Admin,
  Clerk,
  Driver,
  Unemployed,
} from "./classes";
import { Area, City, Suburb } from "./classes/cities";

const dima = new Human({
  name: "homo sapiens",
  balance: 1,
  gender: "male",
  age: 56,
});

const mike = new Developer({
  name: "Mike",
  surname: "Pence",
  job: "developer",
  balance: 23000,
  age: 36,
});

const vlad = new Driver({
  name: "Vlad",
  surname: "Pitt",
  job: "driver",
  balance: 4000,
  age: 23,
});

const andrei = new Doctor({
  name: "Andrei",
  surname: "Piontkovsky",
  job: "doctor",
  balance: 10000,
  age: 17,
});

const kolya = new Clerk({
  name: "Kolya",
  surname: "Kolyan",
  job: "clerk",
  balance: 3500,
  age: 30,
});

const oleg = new Admin({
  name: "Oleg",
  surname: "Luzhny",
  job: "admin",
  balance: 800,
  age: 45,
});

const ivan = new Unemployed({
  name: "Ivan",
  surname: "Franko",
  job: "clerk",
  balance: 0,
  age: 17,
});

const alex = new City({
  name: "Alex",
  surname: "Zinchenko",
  job: "admin",
  balance: 22000,
  age: 17,
  cityName: "Kyiv",
  citySize: 1000000,
  cityPopulation: 5000000,
  cityContinent: "Europe",
});

mike.receiveSalary();
andrei.intern();

oleg.failed();

console.log("[dima]", dima);
console.log("[mike]", mike);
console.log("[vlad]", vlad);
console.log("[andrei]", andrei);
console.log("[kolya]", kolya);
console.log("[oleg]", oleg);
console.log("[ivan]", ivan);
console.log("[alex]", alex);

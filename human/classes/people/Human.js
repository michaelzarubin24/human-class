import {
  AGE_BY_DEFAULT,
  BALANCE_BY_DEFAULT,
  REL_BY_DEFAULT,
} from "../../defaults/default";

import { gender } from "../../defaults/gender";

export class Human {
  constructor({
    name,
    surname,
    age = AGE_BY_DEFAULT,
    gender: userGender,
    job,
    balance = BALANCE_BY_DEFAULT,
    salary,
    rel = REL_BY_DEFAULT,
    productivity,
  }) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.gender = gender.hasOwnProperty(userGender) ? userGender : "unknown";
    this.job = job;
    this.balance = balance;
    this.salary = salary;
    this.rel = rel;
    this.productivity = productivity;
  }

  introduce() {
    console.log(
      `Hi! I'm ${this.name} ${this.surname}! and a ${this.age}-year old ${this.gender} ${this.job}`
    );
  }
  receiveSalary() {
    this.balance += this.salary;
    console.log(
      `${this.name} ${this.surname} received a salary of $${this.salary}. Current balance: $${this.balance}`
    );
  }
}

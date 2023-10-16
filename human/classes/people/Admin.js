import { Human } from "./Human";
import { salaries } from "../../defaults/salary";
import { rewards, fines } from "../../defaults/conditions";
import {
  AGE_BY_DEFAULT,
  BALANCE_BY_DEFAULT,
  REL_BY_DEFAULT,
} from "../../defaults/default";

export class Admin extends Human {
  constructor({
    name,
    surname,
    age = AGE_BY_DEFAULT,
    gender,
    job,
    balance = BALANCE_BY_DEFAULT,
    salary,
    rel = REL_BY_DEFAULT,
  }) {
    super({ name, surname, age, gender, job, balance, salary, rel });
    this.salary = salaries.admin;
  }

  successful() {
    if (this.balance > 1000) this.balance += rewards.admin;
  }

  failed() {
    if (this.balance < 1000) this.balance -= fines.admin;
  }
}

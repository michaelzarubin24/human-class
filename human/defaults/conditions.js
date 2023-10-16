import { salaries } from "./salary";
export const rewards = {
  admin: salaries.admin * 3,
  clerk: salaries.clerk * 2,
  developer: salaries.developer * 1,
  doctor: salaries.doctor * 4,
  driver: salaries.driver * 0.5,
};

export const fines = {
  admin: salaries.admin / 2,
  clerk: salaries.clerk / 2,
  developer: salaries.developer / 3,
  doctor: salaries.doctor / 4,
  driver: salaries.driver / 2,
};

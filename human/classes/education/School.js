import { Institution } from "./Institution";

export class School extends Institution {
  constructor({ name, location, accreditation, level, studentCount }) {
    super({ name, location, accreditation });
    this.level = level;
    this.studentCount = studentCount;
  }
}

import { Institution } from "./Institution";

export class University extends Institution {
  constructor({ name, location, accreditation, ranking, faculties }) {
    super({ name, location, accreditation });
    this.ranking = ranking;
    this.faculties = faculties;
  }
}

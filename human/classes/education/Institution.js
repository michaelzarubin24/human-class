import { Area } from "../cities/Area";

export class Institution extends Area {
  constructor({ name, location, accreditation, continent, size, population }) {
    super(continent, size, location, population);
    this.name = name;
    this.accreditation = accreditation;
  }
  displayInfo() {
    console.log(
      `Name: ${this.name}, Location: ${this.location}, Accreditation: ${this.accreditation}`
    );
  }
}

import { House } from "./House";

export class Apartment extends House {
  constructor({ bedrooms, bathrooms, size, location, floor }) {
    super({ type: "Apartment", bedrooms, bathrooms, size, location });
    this.floor = floor;
  }

  displayInfo() {
    super.displayInfo();
    console.log(`Floor: ${this.floor}`);
  }
}

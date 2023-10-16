import { House } from "./House";

export class Cottage extends House {
  constructor({ bedrooms, bathrooms, size, location, yardSize }) {
    super({ type: "Cottage", bedrooms, bathrooms, size, location });
    this.yardSize = yardSize;
  }

  displayInfo() {
    super.displayInfo();
    console.log(`Yard Size: ${this.yardSize}`);
  }
}

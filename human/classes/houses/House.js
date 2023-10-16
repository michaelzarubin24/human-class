import { Area } from "../cities/Area";

export class House extends Area {
  constructor({
    type,
    bedrooms,
    bathrooms,
    size,
    location,
    continent,
    population,
    climate,
  }) {
    super({ continent, size, population, climate });
    this.type = type;
    this.bedrooms = bedrooms;
    this.bathrooms = bathrooms;
    this.size = size;
    this.location = location;
  }

  displayInfo() {
    console.log(
      `Type: ${this.type}, Bedrooms: ${this.bedrooms}, Bathrooms: ${this.bathrooms}, Size: ${this.size}, Location: ${this.location}`
    );
    console.log(
      `Geographic Info - Continent: ${this.continent}, Population: ${this.population}, Climate: ${this.climate}`
    );
  }
}

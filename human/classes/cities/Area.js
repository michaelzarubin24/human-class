import { Human } from "../people/Human";
import { continents } from "../../defaults/continents";

export class Area extends Human {
  constructor({
    name,
    surname,
    age,
    gender,
    job,
    balance,
    salary,
    rel,
    continent,
    size,
    population,
    climate,
  }) {
    super({
      name,
      surname,
      age,
      gender,
      job,
      balance,
      salary,
      rel,
    });

    this.continent = continents[continent] || "unknown";
    this.size = size;
    this.population = population;
    this.climate = climate;
  }

  getContinent() {
    return this.continent;
  }

  setContinent(newContinent) {
    this.continent = continents[newContinent] || "unknown";
  }

  getPopulationDensity() {
    return this.population / this.size;
  }

  hasClimate(targetClimate) {
    return this.climate === targetClimate;
  }

  classifyArea() {
    if (this.size < 100000) {
      return "Small Area";
    } else if (this.size < 1000000) {
      return "Medium Area";
    } else {
      return "Large Area";
    }
  }
}

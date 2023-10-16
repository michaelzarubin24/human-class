import { Area } from "./Area";
import { cityPop } from "../../defaults/pop";

export class City extends Area {
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
    cityName,
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
      continent,
      size,
      population,
      climate,
    });
    this.cityName = cityName;
  }

  classifyCitySize() {
    const sizeCategories = [
      {
        size: "Small",
        threshold: cityPop.small,
      },
      {
        size: "Medium",
        threshold: cityPop.medium,
      },

      {
        size: "Large",
        threshold: cityPop.large,
      },
      {
        size: "Metropolis",
        threshold: cityPop.metropolis,
      },
    ];

    for (const category of sizeCategories) {
      if (this.population < category.threshold) {
        this.citySize = category.size;
        return;
      }
    }
    this.citySize = sizeCategories[sizeCategories.length - 1].size;
  }
}

import { Area } from "./Area";
import { suburbPop } from "../../defaults/pop";

export class Suburb extends Area {
  constructor({ suburbName, suburbSize, suburbPopulation, suburbContinent }) {
    super({
      continent: suburbContinent,
      size: suburbSize,
      population: suburbPopulation,
    });
    this.suburbName = suburbName;
  }

  classifyCitySize() {
    const sizeCategories = [
      {
        size: "Village",
        threshold: suburbPop.village,
      },
      {
        size: "Hamlet",
        threshold: suburbPop.hamlet,
      },

      {
        size: "smallTown",
        threshold: suburbPop.smallTown,
      },
      {
        size: "town",
        threshold: suburbPop.town,
      },
    ];

    for (const category of sizeCategories) {
      if (this.population < category.threshold) {
        this.suburbSize = category.size;
        return;
      }
    }
    this.suburbSize = sizeCategories[sizeCategories.length - 1].size;
  }
}

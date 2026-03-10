import { City } from "@domain/entities/City";
import { USA, Mexico, Canada } from "./countries";

export const Atlanta: City = new City(USA, "Atlanta");
export const MexicoCity: City = new City(Mexico, "Mexico City");
export const Vancouver: City = new City(Canada, "Vancouver");

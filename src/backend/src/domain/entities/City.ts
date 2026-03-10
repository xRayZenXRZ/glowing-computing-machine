import { Country } from "./Country";

const nomDisponibles: Record<string, string[]> = {
    "USA": ["Atlanta", "Boston", "Dallas", "Houston", "Kansas City", "Los Angeles", "Miami", "New York", "Philadelphia", "Seattle", "San Francisco"],
    "Mexico": ["Guadalajara", "Mexico City", "Monterrey"],
    "Canada": ["Toronto", "Vancouver"],
};

export class City {
    public constructor(public country: Country, public name: string) {
        const validCities = nomDisponibles[country.name];
        if (!validCities?.includes(name)) { throw new Error(`"${name}" n'est pas une ville connue de ${country.name}`); }
    }
}
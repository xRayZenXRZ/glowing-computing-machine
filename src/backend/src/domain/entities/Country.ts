
const nomDisponibles: Record<string, "us" | "me" | "ca"> = { "USA": "us", "Mexico": "me", "Canada": "ca", };

export class Country {
    public constructor(public name: "USA" | "Mexico" | "Canada", public code: "us" | "me" | "ca") {
        if (nomDisponibles[name] !== code) { throw new Error(`Combinaison invalide : "${name}" ne correspond pas au code "${code}"`); }
    }
}
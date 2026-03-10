export class FifaCode {

    public constructor(public value: string) {
        if (!/^[A-Z]{3}$/.test(value)) { throw new Error(`FifaCode invalide : "${value}" (doit être 3 lettres majuscules)`); }
    }

    //methode
    public equals(other: FifaCode): boolean { return this.value === other.value; }

    public toString(): string { return this.value; }
}
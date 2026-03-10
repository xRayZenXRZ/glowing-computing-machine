import { City } from "./City";

export class Stadium {
    public constructor(public name: string, public city: City, public capacity: number) {
        if (capacity < 0) throw new Error("Capacity > 0");
    }

}
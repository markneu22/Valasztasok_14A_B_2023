import Jelolt from "./Jelolt";
import fs from "fs";
export default class Megoldas {
    #jeloltek: Jelolt[] = [];

    get jeloltekSzama(): number {
        return this.#jeloltek.length;
    }

    constructor(file_name: string) {
        fs.readFileSync(file_name)
            .toString()
            .split("\n")
            .forEach(sor => {
                const currentSor: string = sor.trim();
                if (currentSor.length > 0) {
                    this.#jeloltek.push(new Jelolt(currentSor));
                }
            });
    }
}

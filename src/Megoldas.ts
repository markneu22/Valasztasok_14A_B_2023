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
    jeloltSzavazatok(name: string): string {
        let szavazatok: number = 0;
        for (let index = 0; index < this.jeloltekSzama; index++) {
            if (this.#jeloltek[index].nev == name) {
                szavazatok += this.#jeloltek[index].szavazatok;
            }
        }
        if (szavazatok != 0) {
            return `3. feladat: ${name}-ra/re leadott szavazatok száma: ${szavazatok}`;
        } else {
            return "3. feladat: Ilyen  nevű  képviselőjelölt  nem  szerepel a nyilvántartásban!";
        }
    }
    szavazatArany(): number {
        //12345
        let szam: number = 0;
        for (let index = 0; index < this.#jeloltek.length; index++) {
            szam += this.#jeloltek[index].szavazatok;
        }
        return szam;
    }
    partArany(): Map<string, number> {
        const ret = new Map<string, number>();
        for (let index = 0; index < this.#jeloltek.length; index++) {
            if (!ret.has(this.#jeloltek[index].part)) {
                ret.set(this.#jeloltek[index].part, 0);
            } else {
                ret.set(this.#jeloltek[index].part, ret.get(this.#jeloltek[index].part)! + this.#jeloltek[index].szavazatok);
            }
        }
        return ret;
    }
    legtobbSzavat(): Jelolt {
        let legnagyobbJelolt: Jelolt = this.#jeloltek[0];
        for (let index = 0; index < this.#jeloltek.length; index++) {
            if (this.#jeloltek[index].szavazatok > legnagyobbJelolt.szavazatok) {
                legnagyobbJelolt = this.#jeloltek[index];
            }
        }
        return legnagyobbJelolt;
    }
}

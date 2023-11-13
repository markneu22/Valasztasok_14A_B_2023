export default class Jelolt {
    #kerulet: number;
    #szavazatok: number;
    #vNev: string;
    #kNev: string;
    #partJel: string;

    constructor(sor: string) {
        const m: string[] = sor.split(" ");
        this.#kerulet = parseInt(m[0]);
        this.#szavazatok = parseInt(m[1]);
        this.#vNev = m[2];
        this.#kNev = m[3];
        this.#partJel = m[4];
    }
}

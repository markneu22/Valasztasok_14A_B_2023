export default class Jelolt {
    #kerulet: number;
    #szavazatok: number;
    #vNev: string;
    #kNev: string;
    #partJel: string;
    public get nev(): string {
        return `${this.#vNev} ${this.#kNev}`;
    }
    public get szavazatok(): number {
        return this.#szavazatok;
    }
    public get kerulet(): number {
        return this.#kerulet;
    }
    public get partJel(): string {
        return this.#partJel;
    }
    public get part(): string {
        const nevMap: Map<string, string> = new Map<string, string>([
            ["GYEP", "Gyümölcsevők Pártja"],
            ["HEP", "Húsevők Pártja"],
            ["TISZ", "Tejivók Szövetsége"],
            ["ZEP", "Zöldségevők Pártja"],
            ["-", "Független jelöltek"],
        ]);
        if (nevMap.has(this.#partJel)) return nevMap.get(this.#partJel) as string;
        return "Hiba!";
    }
    constructor(sor: string) {
        const m: string[] = sor.split(" ");
        this.#kerulet = parseInt(m[0]);
        this.#szavazatok = parseInt(m[1]);
        this.#vNev = m[2];
        this.#kNev = m[3];
        this.#partJel = m[4];
    }
}

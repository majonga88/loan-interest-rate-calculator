export class Rate {

    currentRate: number;
    rateRange: number[];

    constructor(currentRate: number, rateRange: number[]) {
        this.currentRate = currentRate;
        this.rateRange = rateRange;
    }
}
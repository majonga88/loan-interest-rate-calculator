export class Term {

    currentTerm: number;
    availableTerms: number[];
    maxTerm: number;

    constructor(currentTerm: number, availableTerms: number[], maxTerm: number) {
        this.currentTerm = currentTerm;
        this.availableTerms = availableTerms;
        this.maxTerm = maxTerm;
    }
}
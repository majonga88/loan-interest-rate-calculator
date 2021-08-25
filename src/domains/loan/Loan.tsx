import {Term} from "./Term";
import {Amount} from "./Amount";
import {LoanPurposes} from "./constants/LoanPurposes";
import {LegalForms} from "./constants/LegalForms";

export class Loan {

    loanAmount: Amount;
    loanTerm: Term;
    loanRate: number;
    loanPurpose: LoanPurposes;
    legalForm: LegalForms;

    constructor() {
        this.loanAmount = new Amount(0, 250000);
        this.loanTerm = new Term(12, [12, 24, 36], 36);
        this.loanRate = 0;
        this.loanPurpose = LoanPurposes.MARKETING;
        this.legalForm = LegalForms.PRIVATE_LIMITED;
    }
}
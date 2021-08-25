import {fillMaximumLoanAvailable} from "./LoanTermService";
import {Loan} from "../domains/loan/Loan";
import {LoanPurposes} from "../domains/loan/constants/LoanPurposes";
import {LegalForms} from "../domains/loan/constants/LegalForms";

test('get maximum loan term', () => {

    let loan: Loan = new Loan()

    loan = fillMaximumLoanAvailable(loan)

    expect(loan.loanAmount.currentAmount).toBe(0)
    expect(loan.loanAmount.maxAmount).toBe(250000)
    expect(loan.loanTerm.currentTerm).toBe(12)
    expect(loan.loanTerm.maxTerm).toBe(36)
    expect(loan.loanPurpose).toBe(LoanPurposes.MARKETING)
    expect(loan.legalForm).toBe(LegalForms.PRIVATE_LIMITED)

})
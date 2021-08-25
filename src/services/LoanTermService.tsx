import {LoanPurposes} from "../domains/loan/constants/LoanPurposes";
import {LegalForms} from "../domains/loan/constants/LegalForms";

import {Loan} from "../domains/loan/Loan";

export const fillMaximumLoanAvailable = (loan: Loan): Loan => {

    if (loan.loanPurpose === LoanPurposes.EQUIPMENT
        && loan.legalForm === LegalForms.PRIVATE_LIMITED) {
        loan.loanAmount.maxAmount = 500000;
        loan.loanTerm.maxTerm = 60;
        loan.loanTerm.availableTerms = [12, 24, 36, 48, 60]
    } else {
        loan.loanAmount.maxAmount = 250000;
        loan.loanTerm.maxTerm = 36;
        loan.loanTerm.availableTerms = [12, 24, 36]
    }
    return checkLoanAmountAndTermAreAbove(loan);
};

const checkLoanAmountAndTermAreAbove = (loan: Loan): Loan => {
    if (loan.loanAmount.maxAmount && loan.loanAmount.currentAmount > loan.loanAmount.maxAmount) {
        loan.loanAmount.currentAmount = loan.loanAmount.maxAmount;
    }
    if (loan.loanTerm.maxTerm && loan.loanTerm.currentTerm > loan.loanTerm.maxTerm) {
        loan.loanTerm.currentTerm = loan.loanTerm.maxTerm;
    }
    return loan;
}
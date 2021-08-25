import {getInterestRate, getInterestRateRange} from "./InterestRateService";
import {Loan} from "../domains/loan/Loan";
import {LegalForms} from "../domains/loan/constants/LegalForms";
import {LoanPurposes} from "../domains/loan/constants/LoanPurposes";

test('get interest rate range', () => {

    let interestRateRange = getInterestRateRange(1200)

    expect(interestRateRange.min).toBe(6)
    expect(interestRateRange.max).toBe(8)

    interestRateRange = getInterestRateRange(55000)

    expect(interestRateRange.min).toBe(5)
    expect(interestRateRange.max).toBe(7)

    interestRateRange = getInterestRateRange(200000)

    expect(interestRateRange.min).toBe(4)
    expect(interestRateRange.max).toBe(6)
});

test('get interest rate', () => {

    let loan: Loan = new Loan()

    let interestRate: number = getInterestRate(loan)
    expect(interestRate).toBe(6.67)

    loan.loanTerm.currentTerm = 12
    loan.loanAmount.currentAmount = 150000
    loan.loanPurpose = LoanPurposes.MARKETING
    loan.legalForm = LegalForms.SOLE_PROPRIETORSHIP
    interestRate = getInterestRate(loan)
    expect(interestRate).toBe( 4.67)

    loan.loanTerm.currentTerm = 24
    loan.loanAmount.currentAmount = 200000
    loan.loanPurpose = LoanPurposes.MARKETING
    loan.legalForm = LegalForms.PRIVATE_LIMITED
    interestRate = getInterestRate(loan)
    expect(interestRate).toBe(5.33)

    loan.loanTerm.currentTerm = 36
    loan.loanAmount.currentAmount = 360000
    loan.loanPurpose = LoanPurposes.EQUIPMENT
    loan.legalForm = LegalForms.PRIVATE_LIMITED
    interestRate = getInterestRate(loan)
    expect(interestRate).toBe(6)
});
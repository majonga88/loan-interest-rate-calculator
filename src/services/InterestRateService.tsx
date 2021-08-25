import {Loan} from "../domains/loan/Loan";
import {
    Boundaries,
    FIRST_RATE_BOUNDARY,
    SECOND_RATE_BOUNDARY,
    THIRD_RATE_BOUNDARY
} from "../domains/loan/constants/Boundaries";

export const getInterestRateFromRange = ( loan: Loan ): number => {

    let currentBoundaryAmount: number;
    let amountOfBoundaries: number;
    let boundaries: Boundaries;

    if (loan.loanAmount.currentAmount < FIRST_RATE_BOUNDARY.maxAmount + 1
        && loan.loanTerm.maxTerm !== 60) {

        boundaries = FIRST_RATE_BOUNDARY
        amountOfBoundaries = FIRST_RATE_BOUNDARY.maxAmount / boundaries.boundaries.length;

    } else if (loan.loanAmount.currentAmount < SECOND_RATE_BOUNDARY.maxAmount + 1
        && loan.loanTerm.maxTerm !== 60) {

        boundaries = SECOND_RATE_BOUNDARY
        amountOfBoundaries = (SECOND_RATE_BOUNDARY.maxAmount - FIRST_RATE_BOUNDARY.maxAmount + 1) / boundaries.boundaries.length;

    } else {
        boundaries = THIRD_RATE_BOUNDARY
        amountOfBoundaries = (THIRD_RATE_BOUNDARY.maxAmount - SECOND_RATE_BOUNDARY.maxAmount + 1) / boundaries.boundaries.length;
    }

    currentBoundaryAmount = boundaries.minAmount;

    for (let i = 0; i < boundaries.boundaries.length; i++) {
        currentBoundaryAmount += amountOfBoundaries;
        if (loan.loanAmount.currentAmount <= ( boundaries.minAmount || currentBoundaryAmount )) {
            return boundaries.boundaries[i];
        }
    }
    return 0;
};

export const getInterestRate = ( loan: Loan ): number => {

    const range: number = getInterestRateFromRange(loan);
    if (loan.loanTerm.maxTerm && range) {
        const percentage = (loan.loanTerm.currentTerm * 100) / loan.loanTerm.maxTerm;
        const rate = (range * percentage) / 100;
        return Math.round(rate * 100) / 100;
    }
    return 0;
};
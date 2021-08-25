export interface Boundaries {
    boundaries: number[],
    minAmount: number,
    maxAmount: number,
}

export const FIRST_RATE_BOUNDARY: Boundaries = { boundaries: [6, 7, 8], minAmount: 0, maxAmount: 49999 }
export const SECOND_RATE_BOUNDARY: Boundaries = { boundaries: [5, 6, 7], minAmount: 50000, maxAmount: 149999 }
export const THIRD_RATE_BOUNDARY: Boundaries = { boundaries: [4, 5, 6], minAmount: 150000, maxAmount: 500000 }
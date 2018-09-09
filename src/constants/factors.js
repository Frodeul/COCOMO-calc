import {RATING} from "./rating"


export const FACTORS_NAMES = {
    PREC: "PREC",
    FLEX: "FLEX",
    RESL: "RESL",
    TEAM: "TEAM",
    PMAT: "PMAT"
}

export const FACTORS_VALUES = {
    [FACTORS_NAMES.PREC]: {
        [RATING.VERY_LOW]: 6.2,
        [RATING.LOW]: 4.96,
        [RATING.MEDIUM]: 3.72,
        [RATING.HIGH]: 2.48,
        [RATING.VERY_HIGH]: 1.24,
        [RATING.CRITICAL]: 0
    },
    [FACTORS_NAMES.FLEX]: {
        [RATING.VERY_LOW]: 5.07,
        [RATING.LOW]: 4.05,
        [RATING.MEDIUM]: 3.04,
        [RATING.HIGH]: 2.03,
        [RATING.VERY_HIGH]: 1.01,
        [RATING.CRITICAL]: 0
    },
    [FACTORS_NAMES.RESL]: {
        [RATING.VERY_LOW]: 7.07,
        [RATING.LOW]: 5.65,
        [RATING.MEDIUM]: 4.24,
        [RATING.HIGH]: 2.83,
        [RATING.VERY_HIGH]: 1.41,
        [RATING.CRITICAL]: 0
    },
    [FACTORS_NAMES.TEAM]: {
        [RATING.VERY_LOW]: 5.48,
        [RATING.LOW]: 4.38,
        [RATING.MEDIUM]: 3.29,
        [RATING.HIGH]: 2.19,
        [RATING.VERY_HIGH]: 1.1,
        [RATING.CRITICAL]: 0
    },
    [FACTORS_NAMES.PMAT]: {
        [RATING.VERY_LOW]: 7.8,
        [RATING.LOW]: 6.24,
        [RATING.MEDIUM]: 4.68,
        [RATING.HIGH]: 3.12,
        [RATING.VERY_HIGH]: 1.56,
        [RATING.CRITICAL]: 0
    }
}
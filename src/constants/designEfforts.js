import {RATING} from "./rating"


export const DESIGN_EFFORTS_NAMES = {
    PERS: "PERS",
    PREX: "PREX",
    RCPX: "RCPX",
    RUSE: "RUSE",
    PDIF: "PDIF",
    FCIL: "FCIL",
    SCED: "SCED"
}

export const DESIGN_EFFORTS_VALUES = {
    [DESIGN_EFFORTS_NAMES.PERS]: {
        [RATING.EXTRA_LOW]: 2.12,
        [RATING.VERY_LOW]: 1.62,
        [RATING.LOW]: 1.26,
        [RATING.MEDIUM]: 1.0,
        [RATING.HIGH]: 0.83,
        [RATING.VERY_HIGH]: 0.63,
        [RATING.CRITICAL]: 0.5
    },
    [DESIGN_EFFORTS_NAMES.PREX]: {
        [RATING.EXTRA_LOW]: 1.59,
        [RATING.VERY_LOW]: 1.33,
        [RATING.LOW]: 1.22,
        [RATING.MEDIUM]: 1.0,
        [RATING.HIGH]: 0.87,
        [RATING.VERY_HIGH]: 0.74,
        [RATING.CRITICAL]: 0.62
    },
    [DESIGN_EFFORTS_NAMES.RCPX]: {
        [RATING.EXTRA_LOW]: 2.49,
        [RATING.VERY_LOW]: 1.6,
        [RATING.LOW]: 1.83,
        [RATING.MEDIUM]: 1.0,
        [RATING.HIGH]: 1.33,
        [RATING.VERY_HIGH]: 1.91,
        [RATING.CRITICAL]: 2.72
    },
    [DESIGN_EFFORTS_NAMES.RUSE]: {
        [RATING.LOW]: 0.95,
        [RATING.MEDIUM]: 1.0,
        [RATING.HIGH]: 1.07,
        [RATING.VERY_HIGH]: 1.15,
        [RATING.CRITICAL]: 1.24
    },
    [DESIGN_EFFORTS_NAMES.PDIF]: {
        [RATING.LOW]: 0.87,
        [RATING.MEDIUM]: 1.0,
        [RATING.HIGH]: 1.29,
        [RATING.VERY_HIGH]: 1.81,
        [RATING.CRITICAL]: 2.61
    },
    [DESIGN_EFFORTS_NAMES.FCIL]: {
        [RATING.EXTRA_LOW]: 1.43,
        [RATING.VERY_LOW]: 1.3,
        [RATING.LOW]: 1.1,
        [RATING.MEDIUM]: 1.0,
        [RATING.HIGH]: 0.87,
        [RATING.VERY_HIGH]: 0.73,
        [RATING.CRITICAL]: 0.62
    },
    [DESIGN_EFFORTS_NAMES.SCED]: {
        [RATING.VERY_LOW]: 1.43,
        [RATING.LOW]: 1.14,
        [RATING.MEDIUM]: 1.0,
        [RATING.HIGH]: 1.0
    }
}
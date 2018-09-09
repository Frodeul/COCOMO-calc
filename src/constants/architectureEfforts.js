import {RATING} from "./rating"


export const ARCHITECTURE_EFFORTS_NAMES = {
    ACAP: "ACAP",
    AEXP: "AEXP",
    PCAP: "PCAP",
    PCON: "PCON",
    PEXP: "PEXP",
    LTEX: "LTEX",
    RELY: "RELY",
    DATA: "DATA",
    CPLX: "CPLX",
    RUSE: "RUSE",
    DOCU: "DOCU",
    TIME: "TIME",
    STOR: "STOR",
    PVOL: "PVOL",
    TOOL: "TOOL",
    SITE: "SITE",
    SCED: "SCED"
}

export const ARCHITECTURE_EFFORTS_VALUES = {
    [ARCHITECTURE_EFFORTS_NAMES.ACAP]: {
        [RATING.VERY_LOW]: 1.42,
        [RATING.LOW]: 1.29,
        [RATING.MEDIUM]: 1.0,
        [RATING.HIGH]: 0.85,
        [RATING.VERY_HIGH]: 0.71
    },
    [ARCHITECTURE_EFFORTS_NAMES.AEXP]: {
        [RATING.VERY_LOW]: 1.22,
        [RATING.LOW]: 1.1,
        [RATING.MEDIUM]: 1.0,
        [RATING.HIGH]: 0.88,
        [RATING.VERY_HIGH]: 0.81
    },
    [ARCHITECTURE_EFFORTS_NAMES.PCAP]: {
        [RATING.VERY_LOW]: 1.34,
        [RATING.LOW]: 1.15,
        [RATING.MEDIUM]: 1.0,
        [RATING.HIGH]: 0.88,
        [RATING.VERY_HIGH]: 0.76
    },
    [ARCHITECTURE_EFFORTS_NAMES.PCON]: {
        [RATING.VERY_LOW]: 1.29,
        [RATING.LOW]: 1.12,
        [RATING.MEDIUM]: 1.0,
        [RATING.HIGH]: 0.9,
        [RATING.VERY_HIGH]: 0.81
    },
    [ARCHITECTURE_EFFORTS_NAMES.PEXP]: {
        [RATING.VERY_LOW]: 1.19,
        [RATING.LOW]: 1.09,
        [RATING.MEDIUM]: 1.0,
        [RATING.HIGH]: 0.91,
        [RATING.VERY_HIGH]: 0.85
    },
    [ARCHITECTURE_EFFORTS_NAMES.LTEX]: {
        [RATING.VERY_LOW]: 1.2,
        [RATING.LOW]: 1.09,
        [RATING.MEDIUM]: 1.0,
        [RATING.HIGH]: 0.91,
        [RATING.VERY_HIGH]: 0.84
    },
    [ARCHITECTURE_EFFORTS_NAMES.RELY]: {
        [RATING.VERY_LOW]: 1.84,
        [RATING.LOW]: 1.92,
        [RATING.MEDIUM]: 1.0,
        [RATING.HIGH]: 0.1,
        [RATING.VERY_HIGH]: 1.26
    },
    [ARCHITECTURE_EFFORTS_NAMES.DATA]: {
        [RATING.LOW]: 0.23,
        [RATING.MEDIUM]: 1.0,
        [RATING.HIGH]: 1.14,
        [RATING.VERY_HIGH]: 1.28
    },
    [ARCHITECTURE_EFFORTS_NAMES.CPLX]: {
        [RATING.VERY_LOW]: 0.73,
        [RATING.LOW]: 0.87,
        [RATING.MEDIUM]: 1.0,
        [RATING.HIGH]: 1.17,
        [RATING.VERY_HIGH]: 1.34,
        [RATING.CRITICAL]: 1.74
    },
    [ARCHITECTURE_EFFORTS_NAMES.RUSE]: {
        [RATING.LOW]: 0.95,
        [RATING.MEDIUM]: 1.0,
        [RATING.HIGH]: 1.07,
        [RATING.VERY_HIGH]: 1.15,
        [RATING.CRITICAL]: 1.24
    },
    [ARCHITECTURE_EFFORTS_NAMES.DOCU]: {
        [RATING.VERY_LOW]: 0.81,
        [RATING.LOW]: 0.91,
        [RATING.MEDIUM]: 1.0,
        [RATING.HIGH]: 1.11,
        [RATING.VERY_HIGH]: 1.23
    },
    [ARCHITECTURE_EFFORTS_NAMES.TIME]: {
        [RATING.MEDIUM]: 1.0,
        [RATING.HIGH]: 1.11,
        [RATING.VERY_HIGH]: 1.29,
        [RATING.CRITICAL]: 1.63
    },
    [ARCHITECTURE_EFFORTS_NAMES.STOR]: {
        [RATING.MEDIUM]: 1.0,
        [RATING.HIGH]: 1.05,
        [RATING.VERY_HIGH]: 1.17,
        [RATING.CRITICAL]: 1.46
    },
    [ARCHITECTURE_EFFORTS_NAMES.PVOL]: {
        [RATING.LOW]: 0.87,
        [RATING.MEDIUM]: 1.0,
        [RATING.HIGH]: 1.15,
        [RATING.VERY_HIGH]: 1.3
    },
    [ARCHITECTURE_EFFORTS_NAMES.TOOL]: {
        [RATING.VERY_LOW]: 1.17,
        [RATING.LOW]: 1.09,
        [RATING.MEDIUM]: 1.0,
        [RATING.HIGH]: 0.9,
        [RATING.VERY_HIGH]: 0.78
    },
    [ARCHITECTURE_EFFORTS_NAMES.SITE]: {
        [RATING.VERY_LOW]: 1.22,
        [RATING.LOW]: 1.09,
        [RATING.MEDIUM]: 1.0,
        [RATING.HIGH]: 0.93,
        [RATING.VERY_HIGH]: 0.86,
        [RATING.CRITICAL]: 0.8
    },
    [ARCHITECTURE_EFFORTS_NAMES.SCED]: {
        [RATING.VERY_LOW]: 1.43,
        [RATING.LOW]: 1.14,
        [RATING.MEDIUM]: 1.0,
        [RATING.HIGH]: 1.0,
        [RATING.VERY_HIGH]: 1.0
    }
}
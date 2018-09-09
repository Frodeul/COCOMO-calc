import {RATING} from "./rating"


export const DRIVERS_NAMES = {
    RELIABILITY: "RELIABILITY",
    DB_SIZE: "DB_SIZE",
    COMPLEXITY: "COMPLEXITY",
    PERFORMANCE: "PERFORMANCE",
    MEMORY: "MEMORY",
    ENVIRONMENT_INSTABILITY: "ENVIRONMENT_INSTABILITY",
    RECOVERY_TIME: "RECOVERY_TIME",
    ANALYTIC_SKILLS: "ANALYTIC_SKILLS",
    DEV_EXP: "DEV_EXP",
    DEV_ABILITIES: "DEV_ABILITIES",
    VIRTUAL_MACHINE_EXP: "VIRTUAL_MACHINE_EXP",
    LANGUAGE_EXP: "LANGUAGE_EXP",
    DEV_METHODS: "DEV_METHODS",
    DEV_TOOLS: "DEV_TOOLS",
    DEV_SCHEDULE: "DEV_SCHEDULE"
}

export const DRIVERS_VALUES = {
    [DRIVERS_NAMES.RELIABILITY]: {
        [RATING.VERY_LOW]: 0.75,
        [RATING.LOW]: 0.88,
        [RATING.MEDIUM]: 1.0,
        [RATING.HIGH]: 1.15,
        [RATING.VERY_HIGH]: 1.4
    },
    [DRIVERS_NAMES.DB_SIZE]: {
        [RATING.LOW]: 0.94,
        [RATING.MEDIUM]: 1.0,
        [RATING.HIGH]: 1.08,
        [RATING.VERY_HIGH]: 1.16
    },
    [DRIVERS_NAMES.COMPLEXITY]: {
        [RATING.VERY_LOW]: 0.7,
        [RATING.LOW]: 0.85,
        [RATING.MEDIUM]: 1.0,
        [RATING.HIGH]: 1.15,
        [RATING.VERY_HIGH]: 1.3,
        [RATING.CRITICAL]: 1.65
    },
    [DRIVERS_NAMES.PERFORMANCE]: {
        [RATING.MEDIUM]: 1.0,
        [RATING.HIGH]: 1.11,
        [RATING.VERY_HIGH]: 1.3,
        [RATING.CRITICAL]: 1.66
    },
    [DRIVERS_NAMES.MEMORY]: {
        [RATING.MEDIUM]: 1.0,
        [RATING.HIGH]: 1.06,
        [RATING.VERY_HIGH]: 1.21,
        [RATING.CRITICAL]: 1.56
    },
    [DRIVERS_NAMES.ENVIRONMENT_INSTABILITY]: {
        [RATING.LOW]: 0.87,
        [RATING.MEDIUM]: 1.0,
        [RATING.HIGH]: 1.15,
        [RATING.VERY_HIGH]: 1.3
    },
    [DRIVERS_NAMES.RECOVERY_TIME]: {
        [RATING.LOW]: 0.87,
        [RATING.MEDIUM]: 1.0,
        [RATING.HIGH]: 1.07,
        [RATING.VERY_HIGH]: 1.15
    },
    [DRIVERS_NAMES.ANALYTIC_SKILLS]: {
        [RATING.VERY_LOW]: 1.46,
        [RATING.LOW]: 1.19,
        [RATING.MEDIUM]: 1.0,
        [RATING.HIGH]: 0.86,
        [RATING.VERY_HIGH]: 0.71
    },
    [DRIVERS_NAMES.DEV_EXP]: {
        [RATING.VERY_LOW]: 1.29,
        [RATING.LOW]: 1.13,
        [RATING.MEDIUM]: 1.0,
        [RATING.HIGH]: 0.91,
        [RATING.VERY_HIGH]: 0.82
    },
    [DRIVERS_NAMES.DEV_ABILITIES]: {
        [RATING.VERY_LOW]: 1.42,
        [RATING.LOW]: 1.17,
        [RATING.MEDIUM]: 1.0,
        [RATING.HIGH]: 0.86,
        [RATING.VERY_HIGH]: 0.7
    },
    [DRIVERS_NAMES.VIRTUAL_MACHINE_EXP]: {
        [RATING.VERY_LOW]: 1.21,
        [RATING.LOW]: 1.1,
        [RATING.MEDIUM]: 1.0,
        [RATING.HIGH]: 0.9
    },
    [DRIVERS_NAMES.LANGUAGE_EXP]: {
        [RATING.VERY_LOW]: 1.14,
        [RATING.LOW]: 1.07,
        [RATING.MEDIUM]: 1.0,
        [RATING.HIGH]: 0.95
    },
    [DRIVERS_NAMES.DEV_METHODS]: {
        [RATING.VERY_LOW]: 1.24,
        [RATING.LOW]: 1.1,
        [RATING.MEDIUM]: 1.0,
        [RATING.HIGH]: 0.91,
        [RATING.VERY_HIGH]: 0.82
    },
    [DRIVERS_NAMES.DEV_TOOLS]: {
        [RATING.VERY_LOW]: 1.24,
        [RATING.LOW]: 1.1,
        [RATING.MEDIUM]: 1.0,
        [RATING.HIGH]: 0.91,
        [RATING.VERY_HIGH]: 0.83
    },
    [DRIVERS_NAMES.DEV_SCHEDULE]: {
        [RATING.VERY_LOW]: 1.23,
        [RATING.LOW]: 1.08,
        [RATING.MEDIUM]: 1.0,
        [RATING.HIGH]: 0.04,
        [RATING.VERY_HIGH]: 0.1
    }
}
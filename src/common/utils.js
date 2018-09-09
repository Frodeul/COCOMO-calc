import {ARCHITECTURE_EFFORTS_VALUES} from "../constants/architectureEfforts"
import {PROJECT_TYPE, RATE} from "../constants/common"
import {DESIGN_EFFORTS_VALUES} from "../constants/designEfforts"
import {FACTORS_VALUES} from "../constants/factors"
import {DRIVERS_VALUES} from "./../constants/drivers"


const findPMbyRateAndSize = (a, b, size) => (a * Math.pow(size, b))
const findTMbyRateAndPM = (c, d, PM) => (c * Math.pow(PM, d))

export const findPMbyTypeAndSize = (type, size) => {
    switch (type) {
        case PROJECT_TYPE.COMMON:
            return findPMbyRateAndSize(2.4, 1.05, size)

        case PROJECT_TYPE.INDEPENDENT:
            return findPMbyRateAndSize(3.0, 1.12, size)

        case PROJECT_TYPE.INBUILT:
            return findPMbyRateAndSize(3.6, 1.2, size)

        default:
            return 0
    }
}

export const findTMbyTypeAndPM = (type, PM) => {
    switch (type) {
        case PROJECT_TYPE.COMMON:
            return findTMbyRateAndPM(2.5, 0.38, PM)

        case PROJECT_TYPE.INDEPENDENT:
            return findTMbyRateAndPM(2.5, 0.35, PM)

        case PROJECT_TYPE.INBUILT:
            return findTMbyRateAndPM(2.5, 0.32, PM)

        default:
            return 0
    }
}

export const findPMbyEAFtypeAndSize = (EAF, type, size) => {
    switch (type) {
        case PROJECT_TYPE.COMMON:
            return (EAF * 3.2 * Math.pow(size, 1.05))

        case PROJECT_TYPE.INDEPENDENT:
            return (EAF * 3.0 * Math.pow(size, 1.12))

        case PROJECT_TYPE.INBUILT:
            return (EAF * 2.8 * Math.pow(size, 1.2))

        default:
            return 0
    }
}

export const getCDeaf = data => data.reduce((a, b) => a * DRIVERS_VALUES[b.name][b.value], 1)

export const getDesignEMeaf = data => data.reduce((a, b) => a * DESIGN_EFFORTS_VALUES[b.name][b.value], 1)

export const getArchitectureEMeaf = data => data.reduce((a, b) => a * ARCHITECTURE_EFFORTS_VALUES[b.name][b.value], 1)

export const getSF = data => data.reduce((a, b) => a + FACTORS_VALUES[b.name][b.value], 1)

export const getE = SF => RATE.B + 0.01 * SF

export const getDesignPM = (EAF, SF, size) => EAF * RATE.A.design * Math.pow(size, getE(SF))

export const getArchitecturePM = (EAF, SF, size) => EAF * RATE.A.architecture * Math.pow(size, getE(SF))

export const getTM_II = (SCED, PMns, E) => SCED * 3.67 * Math.pow(PMns, 0.28 + 0.2 * (E - RATE.B))

export const createResult = (PM, TM) => [
    {name: "Трудоемкость", value: PM.toFixed(2)},
    {name: "Время разработки (мес.)", value: TM.toFixed(2)}
]

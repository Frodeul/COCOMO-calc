import {FACTORS_NAMES, FACTORS_VALUES} from "../constants/factors"
import chunk from "lodash.chunk"
import {RATING} from "../constants/rating"


const ROW_SIZE = 4

export const factorsData = chunk([
    {
        label: "Прецедентность",
        ratings: Object.keys(FACTORS_VALUES[FACTORS_NAMES.PREC]),
        name: FACTORS_NAMES.PREC
    },
    {
        label: "Гибкость процесса разработки",
        ratings: Object.keys(FACTORS_VALUES[FACTORS_NAMES.FLEX]),
        name: FACTORS_NAMES.FLEX
    },
    {
        label: "Архитектура и разрешение рисков",
        ratings: Object.keys(FACTORS_VALUES[FACTORS_NAMES.RESL]),
        name: FACTORS_NAMES.RESL
    },
    {
        label: "Сработанность команды",
        ratings: Object.keys(FACTORS_VALUES[FACTORS_NAMES.TEAM]),
        name: FACTORS_NAMES.TEAM
    },
    {
        label: "Зрелость процессов",
        ratings: Object.keys(FACTORS_VALUES[FACTORS_NAMES.PMAT]),
        name: FACTORS_NAMES.PMAT
    }
], ROW_SIZE)

export const initialFactors = [
    {name: FACTORS_NAMES.PREC, value: RATING.MEDIUM},
    {name: FACTORS_NAMES.FLEX, value: RATING.MEDIUM},
    {name: FACTORS_NAMES.RESL, value: RATING.MEDIUM},
    {name: FACTORS_NAMES.TEAM, value: RATING.MEDIUM},
    {name: FACTORS_NAMES.PMAT, value: RATING.MEDIUM}
]
import {DESIGN_EFFORTS_NAMES, DESIGN_EFFORTS_VALUES} from "../constants/designEfforts"
import {RATING} from "../constants/rating"
import chunk from "lodash.chunk"


const staff = [
    {
        label: "Квалификация персонала",
        ratings: Object.keys(DESIGN_EFFORTS_VALUES[DESIGN_EFFORTS_NAMES.PERS]),
        name: DESIGN_EFFORTS_NAMES.PERS
    },
    {
        label: "Опыт персонала",
        ratings: Object.keys(DESIGN_EFFORTS_VALUES[DESIGN_EFFORTS_NAMES.PREX]),
        name: DESIGN_EFFORTS_NAMES.PREX
    }
]

const product = [
    {
        label: "Сложность продукта",
        ratings: Object.keys(DESIGN_EFFORTS_VALUES[DESIGN_EFFORTS_NAMES.RCPX]),
        name: DESIGN_EFFORTS_NAMES.RCPX
    },
    {
        label: "Повторное использование",
        ratings: Object.keys(DESIGN_EFFORTS_VALUES[DESIGN_EFFORTS_NAMES.RUSE]),
        name: DESIGN_EFFORTS_NAMES.RUSE
    }
]

const platform = [
    {
        label: "Сложность плафтормы разработки",
        ratings: Object.keys(DESIGN_EFFORTS_VALUES[DESIGN_EFFORTS_NAMES.PDIF]),
        name: DESIGN_EFFORTS_NAMES.PDIF
    }
]

const project = [
    {
        label: "Оборудование",
        ratings: Object.keys(DESIGN_EFFORTS_VALUES[DESIGN_EFFORTS_NAMES.FCIL]),
        name: DESIGN_EFFORTS_NAMES.FCIL
    },
    {
        label: "Требуемое выполнение графика",
        ratings: Object.keys(DESIGN_EFFORTS_VALUES[DESIGN_EFFORTS_NAMES.SCED]),
        name: DESIGN_EFFORTS_NAMES.SCED
    }
]

export const designData = chunk([
    {
        label: "Параметры персонала",
        items: staff
    },
    {
        label: "Параметры продукта",
        items: product
    },
    {
        label: "Параметры платформы",
        items: platform
    },
    {
        label: "Параметры проекта",
        items: project
    }
], 2)

export const designInitialEfforts = [
    {name: DESIGN_EFFORTS_NAMES.PERS, value: RATING.MEDIUM},
    {name: DESIGN_EFFORTS_NAMES.PREX, value: RATING.MEDIUM},
    {name: DESIGN_EFFORTS_NAMES.RCPX, value: RATING.MEDIUM},
    {name: DESIGN_EFFORTS_NAMES.RUSE, value: RATING.MEDIUM},
    {name: DESIGN_EFFORTS_NAMES.PDIF, value: RATING.MEDIUM},
    {name: DESIGN_EFFORTS_NAMES.FCIL, value: RATING.MEDIUM},
    {name: DESIGN_EFFORTS_NAMES.SCED, value: RATING.MEDIUM}
]
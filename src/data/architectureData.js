import chunk from "lodash.chunk"
import {ARCHITECTURE_EFFORTS_NAMES, ARCHITECTURE_EFFORTS_VALUES} from "../constants/architectureEfforts"
import {RATING} from "../constants/rating"


const ROW_SIZE = 4

export const personnel = [
    {
        label: "Возможности аналитика",
        ratings: Object.keys(ARCHITECTURE_EFFORTS_VALUES[ARCHITECTURE_EFFORTS_NAMES.ACAP]),
        name: ARCHITECTURE_EFFORTS_NAMES.ACAP
    },
    {
        label: "Опыт применения",
        ratings: Object.keys(ARCHITECTURE_EFFORTS_VALUES[ARCHITECTURE_EFFORTS_NAMES.AEXP]),
        name: ARCHITECTURE_EFFORTS_NAMES.AEXP
    },
    {
        label: "Возможности программиста",
        ratings: Object.keys(ARCHITECTURE_EFFORTS_VALUES[ARCHITECTURE_EFFORTS_NAMES.PCAP]),
        name: ARCHITECTURE_EFFORTS_NAMES.PCAP
    },
    {
        label: "Текучесть персонала",
        ratings: Object.keys(ARCHITECTURE_EFFORTS_VALUES[ARCHITECTURE_EFFORTS_NAMES.PCON]),
        name: ARCHITECTURE_EFFORTS_NAMES.PCON
    },
    {
        label: "Опыт использования платформы",
        ratings: Object.keys(ARCHITECTURE_EFFORTS_VALUES[ARCHITECTURE_EFFORTS_NAMES.PEXP]),
        name: ARCHITECTURE_EFFORTS_NAMES.PEXP
    },
    {
        label: "Опыт использования языка и инструментов",
        ratings: Object.keys(ARCHITECTURE_EFFORTS_VALUES[ARCHITECTURE_EFFORTS_NAMES.LTEX]),
        name: ARCHITECTURE_EFFORTS_NAMES.LTEX
    }
]

const product = [
    {
        label: "Требуемая надежность ПО",
        ratings: Object.keys(ARCHITECTURE_EFFORTS_VALUES[ARCHITECTURE_EFFORTS_NAMES.RELY]),
        name: ARCHITECTURE_EFFORTS_NAMES.RELY
    },
    {
        label: "Размер БД приложения",
        ratings: Object.keys(ARCHITECTURE_EFFORTS_VALUES[ARCHITECTURE_EFFORTS_NAMES.DATA]),
        name: ARCHITECTURE_EFFORTS_NAMES.DATA
    },
    {
        label: "Сложность разрабатываемого ПО",
        ratings: Object.keys(ARCHITECTURE_EFFORTS_VALUES[ARCHITECTURE_EFFORTS_NAMES.CPLX]),
        name: ARCHITECTURE_EFFORTS_NAMES.CPLX
    },
    {
        label: "Требуемая переиспользуемость ПО",
        ratings: Object.keys(ARCHITECTURE_EFFORTS_VALUES[ARCHITECTURE_EFFORTS_NAMES.RUSE]),
        name: ARCHITECTURE_EFFORTS_NAMES.RUSE
    },
    {
        label: "Необходимость совместимости документации с жизненным циклом",
        ratings: Object.keys(ARCHITECTURE_EFFORTS_VALUES[ARCHITECTURE_EFFORTS_NAMES.DOCU]),
        name: ARCHITECTURE_EFFORTS_NAMES.DOCU
    }
]

const platform = [
    {
        label: "Ограничения времени выполнения",
        ratings: Object.keys(ARCHITECTURE_EFFORTS_VALUES[ARCHITECTURE_EFFORTS_NAMES.TIME]),
        name: ARCHITECTURE_EFFORTS_NAMES.TIME
    },
    {
        label: "Ограничения памяти",
        ratings: Object.keys(ARCHITECTURE_EFFORTS_VALUES[ARCHITECTURE_EFFORTS_NAMES.STOR]),
        name: ARCHITECTURE_EFFORTS_NAMES.STOR
    },
    {
        label: "Непостоянство платформы",
        ratings: Object.keys(ARCHITECTURE_EFFORTS_VALUES[ARCHITECTURE_EFFORTS_NAMES.PVOL]),
        name: ARCHITECTURE_EFFORTS_NAMES.PVOL
    }
]

const project = [
    {
        label: "Использование инструментов разработки",
        ratings: Object.keys(ARCHITECTURE_EFFORTS_VALUES[ARCHITECTURE_EFFORTS_NAMES.TOOL]),
        name: ARCHITECTURE_EFFORTS_NAMES.TOOL
    },
    {
        label: "Многоуровневая разработка",
        ratings: Object.keys(ARCHITECTURE_EFFORTS_VALUES[ARCHITECTURE_EFFORTS_NAMES.SITE]),
        name: ARCHITECTURE_EFFORTS_NAMES.SITE
    },
    {
        label: "Требования к графику разработки",
        ratings: Object.keys(ARCHITECTURE_EFFORTS_VALUES[ARCHITECTURE_EFFORTS_NAMES.SCED]),
        name: ARCHITECTURE_EFFORTS_NAMES.SCED
    }
]

export const architectureData = [
    {
        label: "Факторы персонала",
        items: chunk(personnel, ROW_SIZE)
    },
    {
        label: "Факторы продукта",
        items: chunk(product, ROW_SIZE)
    },
    {
        label: "Факторы платформы",
        items: chunk(platform, ROW_SIZE)
    },
    {
        label: "Факторы проекта",
        items: chunk(project, ROW_SIZE)
    }
]

export const architectureInitialEfforts = [
    {name: ARCHITECTURE_EFFORTS_NAMES.ACAP, value: RATING.MEDIUM},
    {name: ARCHITECTURE_EFFORTS_NAMES.AEXP, value: RATING.MEDIUM},
    {name: ARCHITECTURE_EFFORTS_NAMES.PCAP, value: RATING.MEDIUM},
    {name: ARCHITECTURE_EFFORTS_NAMES.PCON, value: RATING.MEDIUM},
    {name: ARCHITECTURE_EFFORTS_NAMES.PEXP, value: RATING.MEDIUM},
    {name: ARCHITECTURE_EFFORTS_NAMES.LTEX, value: RATING.MEDIUM},
    {name: ARCHITECTURE_EFFORTS_NAMES.RELY, value: RATING.MEDIUM},
    {name: ARCHITECTURE_EFFORTS_NAMES.DATA, value: RATING.MEDIUM},
    {name: ARCHITECTURE_EFFORTS_NAMES.CPLX, value: RATING.MEDIUM},
    {name: ARCHITECTURE_EFFORTS_NAMES.RUSE, value: RATING.MEDIUM},
    {name: ARCHITECTURE_EFFORTS_NAMES.DOCU, value: RATING.MEDIUM},
    {name: ARCHITECTURE_EFFORTS_NAMES.TIME, value: RATING.MEDIUM},
    {name: ARCHITECTURE_EFFORTS_NAMES.STOR, value: RATING.MEDIUM},
    {name: ARCHITECTURE_EFFORTS_NAMES.PVOL, value: RATING.MEDIUM},
    {name: ARCHITECTURE_EFFORTS_NAMES.TOOL, value: RATING.MEDIUM},
    {name: ARCHITECTURE_EFFORTS_NAMES.SITE, value: RATING.MEDIUM},
    {name: ARCHITECTURE_EFFORTS_NAMES.SCED, value: RATING.MEDIUM}
]
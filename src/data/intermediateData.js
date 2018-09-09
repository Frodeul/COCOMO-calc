import chunk from "lodash.chunk"
import {DRIVERS_NAMES, DRIVERS_VALUES} from "../constants/drivers"
import {RATING} from "../constants/rating"


const ROW_SIZE = 4
/* Cost drivers */
// [RATING.VERY_LOW, RATING.LOW, RATING.MEDIUM, RATING.HIGH, RATING.VERY_HIGH, RATING.CRITICAL]

export const product = [
    {
        label: "Требуемая надежность ПО",
        ratings: Object.keys(DRIVERS_VALUES[DRIVERS_NAMES.RELIABILITY]),
        name: DRIVERS_NAMES.RELIABILITY
    },
    {
        label: "Размер БД",
        ratings: Object.keys(DRIVERS_VALUES[DRIVERS_NAMES.DB_SIZE]),
        name: DRIVERS_NAMES.DB_SIZE
    },
    {
        label: "Сложность продукта",
        ratings: Object.keys(DRIVERS_VALUES[DRIVERS_NAMES.COMPLEXITY]),
        name: DRIVERS_NAMES.COMPLEXITY
    }
]

export const hardware = [
    {
        label: "Ограничения быстродействия при выполнении программы",
        ratings: Object.keys(DRIVERS_VALUES[DRIVERS_NAMES.PERFORMANCE]),
        name: DRIVERS_NAMES.PERFORMANCE
    },
    {
        label: "Ограничения памяти",
        ratings: Object.keys(DRIVERS_VALUES[DRIVERS_NAMES.MEMORY]),
        name: DRIVERS_NAMES.MEMORY
    },
    {
        label: "Неустойчивость окружения виртуальной машины",
        ratings: Object.keys(DRIVERS_VALUES[DRIVERS_NAMES.ENVIRONMENT_INSTABILITY]),
        name: DRIVERS_NAMES.ENVIRONMENT_INSTABILITY
    },
    {
        label: "Требуемое время восстановления",
        ratings: Object.keys(DRIVERS_VALUES[DRIVERS_NAMES.RECOVERY_TIME]),
        name: DRIVERS_NAMES.RECOVERY_TIME
    }
]

export const staff = [
    {
        label: "Аналитические способности",
        ratings: Object.keys(DRIVERS_VALUES[DRIVERS_NAMES.ANALYTIC_SKILLS]),
        name: DRIVERS_NAMES.ANALYTIC_SKILLS
    },
    {
        label: "Опыт разработки",
        ratings: Object.keys(DRIVERS_VALUES[DRIVERS_NAMES.DEV_EXP]),
        name: DRIVERS_NAMES.DEV_EXP
    },
    {
        label: "Способности к разработке ПО",
        ratings: Object.keys(DRIVERS_VALUES[DRIVERS_NAMES.DEV_ABILITIES]),
        name: DRIVERS_NAMES.DEV_ABILITIES
    },
    {
        label: "Опыт использования виртуальных машин",
        ratings: Object.keys(DRIVERS_VALUES[DRIVERS_NAMES.VIRTUAL_MACHINE_EXP]),
        name: DRIVERS_NAMES.VIRTUAL_MACHINE_EXP
    },
    {
        label: "Опыт разработки на языках программирования",
        ratings: Object.keys(DRIVERS_VALUES[DRIVERS_NAMES.LANGUAGE_EXP]),
        name: DRIVERS_NAMES.LANGUAGE_EXP
    }
]

const project = [
    {
        label: "Приенение методов разработки ПО",
        ratings: Object.keys(DRIVERS_VALUES[DRIVERS_NAMES.DEV_METHODS]),
        name: DRIVERS_NAMES.DEV_METHODS
    },
    {
        label: "Использование инструментария разработки ПО",
        ratings: Object.keys(DRIVERS_VALUES[DRIVERS_NAMES.DEV_TOOLS]),
        name: DRIVERS_NAMES.DEV_TOOLS
    },
    {
        label: "Требования соблюдения графика разработки",
        ratings: Object.keys(DRIVERS_VALUES[DRIVERS_NAMES.DEV_SCHEDULE]),
        name: DRIVERS_NAMES.DEV_SCHEDULE
    }
]

export const intermediateData = [
    {
        label: "Характеристики продукта",
        items: chunk(product, ROW_SIZE)
    },
    {
        label: "Характеристики аппаратного обеспечения",
        items: chunk(hardware, ROW_SIZE)
    },
    {
        label: "Характеристики персонала",
        items: chunk(staff, ROW_SIZE)
    },
    {
        label: "Характеристики проекта",
        items: chunk(project, ROW_SIZE)
    }
]

export const initialDrivers = [
    {name: DRIVERS_NAMES.RELIABILITY, value: RATING.MEDIUM},
    {name: DRIVERS_NAMES.DB_SIZE, value: RATING.MEDIUM},
    {name: DRIVERS_NAMES.COMPLEXITY, value: RATING.MEDIUM},
    {name: DRIVERS_NAMES.PERFORMANCE, value: RATING.MEDIUM},
    {name: DRIVERS_NAMES.MEMORY, value: RATING.MEDIUM},
    {name: DRIVERS_NAMES.ENVIRONMENT_INSTABILITY, value: RATING.MEDIUM},
    {name: DRIVERS_NAMES.RECOVERY_TIME, value: RATING.MEDIUM},
    {name: DRIVERS_NAMES.ANALYTIC_SKILLS, value: RATING.MEDIUM},
    {name: DRIVERS_NAMES.DEV_EXP, value: RATING.MEDIUM},
    {name: DRIVERS_NAMES.DEV_ABILITIES, value: RATING.MEDIUM},
    {name: DRIVERS_NAMES.VIRTUAL_MACHINE_EXP, value: RATING.MEDIUM},
    {name: DRIVERS_NAMES.LANGUAGE_EXP, value: RATING.MEDIUM},
    {name: DRIVERS_NAMES.DEV_METHODS, value: RATING.MEDIUM},
    {name: DRIVERS_NAMES.DEV_TOOLS, value: RATING.MEDIUM},
    {name: DRIVERS_NAMES.DEV_SCHEDULE, value: RATING.MEDIUM}
]
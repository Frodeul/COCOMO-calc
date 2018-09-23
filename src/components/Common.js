import React from "react"
import uuidv4 from "uuid/v4"
import {RATING_NAMES} from "../constants/rating"


export const Type = ({value, handleChange, TYPE}) => (
    <div className="mb-4">
        <div className="form-row">
            <div className="form-group col-md-4">
                <label htmlFor="inputProjectType"><abbr title="Уровень сложности проекта">Тип проекта</abbr></label>
                <select className="form-control" id="inputProjectType" value={value} name="type"
                        onChange={handleChange} required>
                    <option value={TYPE.COMMON}>Распространенный</option>
                    <option value={TYPE.INDEPENDENT}>Полунезависимый</option>
                    <option value={TYPE.INBUILT}>Встроенный</option>
                </select>
            </div>
        </div>
        <TypeHint value={value} TYPE={TYPE}/>
    </div>
)

const TypeHint = ({value, TYPE}) => (
    <div className="text-secondary">
        {
            value === TYPE.COMMON ? "Проект выполняется небольшой группой специалистов, имеющих опыт в создании подобных изделий и опыт применения технологических средств. Условия работы стабильны, и изделие имеет относительно невысокую сложность."
                : value === TYPE.INDEPENDENT ? "Проект средней сложности. Исполнители знакомы лишь с некоторыми характеристиками (или компонентами) создаваемой системы, имеют средний опыт работы с подобными изделиями, изделие имеет элемент новизны. Только часть требований к изделию жестко фиксируется, в остальном разработки имеют степени выбора"
                : value === TYPE.INBUILT ? "Проект характеризуется очень жесткими требованиями на программный продукт, интерфейсы, параметры ЭВМ. Как правило, у таких изделий высокая степень новизны и планирование работ осуществляется при недостаточной информации, как о самом изделии, так и об условиях работы."
                    : null
        }
    </div>
)

export const Size = ({value, handleChange}) => (
    <div className="form-row">
        <div className="form-group col-md-3">
            <label htmlFor="inputSize">
                <abbr title="Объем программного продукта в тысячах строк исходного текста">Размер программного
                    кода</abbr>
            </label>
            <input type="number" className="form-control" id="inputSize" name="size" required
                   placeholder="Объем в тысячах строк" value={value} onChange={handleChange} min={1}/>
        </div>
    </div>
)

export const Select = ({label, ratings, name, value, handleChange, className}) => (
    <div className={`form-group col-md-3 ${className}`}>
        <label htmlFor={name}>{label}</label>
        <select className="form-control" id={name} value={value} name={name}
                onChange={handleChange} required>
            <RatingOptions ratings={ratings}/>
        </select>
    </div>
)

export const RatingOptions = ({ratings}) => (
    ratings.map(it => <option value={it} key={it}>{RATING_NAMES[it]}</option>)
)

export const SubmitButton = ({className}) => (
    <button type="submit" className={`btn btn-primary btn-lg ${className}`}
            onClick={() => window.scroll(0, 0)}>Рассчитать</button>
)

export const ScaleFactors = ({data, values, handleChange}) => (
    <React.Fragment>
        <h3 className="text-center mb-3 mt-3">Факторы масштаба</h3>
        {data.map(row =>
            <div className="form-row d-flex align-items-end" key={uuidv4()}>
                {row.map(it =>
                    <Select {...it} value={values.find(v => v.name === it.name).value}
                            handleChange={handleChange} key={uuidv4()}/>
                )}
            </div>
        )}
    </React.Fragment>
)

export const Sections = ({data, values, handleChange, label}) =>
    <React.Fragment>
        <h3 className="text-center">{label}</h3>
        {data.map(s => (
            <React.Fragment key={uuidv4()}>
                <h5 className="mt-3 mb-4">{s.label}</h5>
                {s.items.map(row =>
                    <div className="form-row d-flex align-items-end" key={uuidv4()}>
                        {row.map(it =>
                            <Select {...it} value={values.find(v => v.name === it.name).value}
                                    handleChange={handleChange}
                                    key={uuidv4()}/>
                        )}
                    </div>
                )}
            </React.Fragment>)
        )}
    </React.Fragment>
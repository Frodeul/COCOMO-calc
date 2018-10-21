import React from "react"
import Modal from "react-responsive-modal"
import {findPMbyEAFtypeAndSize, findTMbyTypeAndPM, getCDeaf} from "../common/utils"
import {PROJECT_TYPE, RESULT_NAMES} from "../constants/common"
import {initialDrivers, intermediateData} from "../data/intermediateData"
import {HintButton, Sections, Size, SubmitButton, Type} from "./Common"


export class Intermediate extends React.Component {

    state = {
        size: 1,
        type: PROJECT_TYPE.COMMON,
        costDrivers: initialDrivers,
        infoOpen: false
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleDriversChange = e => {
        const name = e.target.name
        const value = e.target.value
        this.setState(prevState => ({
            costDrivers: prevState.costDrivers.map(it => it.name === name ? {name, value} : it)
        }))
    }

    onSubmit = e => {
        e.preventDefault()
        this.props.setResults(this.calculate())
    }

    openModal = () => {
        this.setState({infoOpen: true})
    }

    closeModal = () => {
        this.setState({infoOpen: false})
    }

    calculate = () => {
        const {type, size, costDrivers} = this.state
        const CD = getCDeaf(costDrivers)
        const PM = findPMbyEAFtypeAndSize(CD, type, size)
        return [
            {name: RESULT_NAMES.PM, value: PM},
            {name: RESULT_NAMES.TM, value: findTMbyTypeAndPM(type, PM)},
            {name: RESULT_NAMES.CD, value: CD}
        ]
    }

    render() {
        const {size, type, costDrivers, infoOpen} = this.state
        return (
            <form className="mb-4" onSubmit={this.onSubmit}>
                <HintButton onClick={this.openModal}/>
                <SubmitButton className="float-right"/>
                <Type value={type} handleChange={this.handleChange} TYPE={PROJECT_TYPE}/>
                <Size value={size} handleChange={this.handleChange}/>
                <Sections data={intermediateData} values={costDrivers} handleChange={this.handleDriversChange}
                          label="Факторы затрат"/>
                <Modal open={infoOpen} onClose={this.closeModal} center>
                    <Info/>
                </Modal>
            </form>
        )
    }
}

const Info = () => (
    <React.Fragment>
        <div className="modal-header">
            <h5 className="modal-title">Промежуточный уровень (Intermediate COCOMO)</h5>
        </div>
        <div className="modal-body">
            <p>
                На этом уровне базовая модель уточнена за счет ввода дополнительных 15 «атрибутов стоимости» (или
                факторов затрат) Cost Drivers (CDk), которые сгруппированы по четырем категориям:
            </p>
            <ul>
                <li>Характеристики продукта (Product Аttributes):
                    <ul>
                        <li>Требуемая надежность ПО (Required Software Reliability);</li>
                        <li>Размер БД приложения (Size of Application Database);</li>
                        <li>Сложность продукта (Complexity of the Product);</li>
                    </ul>
                </li>
                <li>Характеристики аппаратного обеспечения (Hardware Аttributes):
                    <ul>
                        <li>Ограничения быстродействия при выполнении программы (Run-Time Performance Constraints);</li>
                        <li>Ограничения памяти (Memory Constraints);</li>
                        <li>Неустойчивость окружения виртуальной машины (Volatility of the Virtual Machine
                            Environment);
                        </li>
                        <li>Требуемое время восстановления (Required Turnabout Time);</li>
                    </ul>
                </li>
                <li>Характеристики персонала (Personnel Аttributes):
                    <ul>
                        <li>Аналитические способности (Analyst Capability);</li>
                        <li>Способности к разработке ПО (Software Engineer Capability);</li>
                        <li> Опыт разработки (Applications Experience);</li>
                        <li>Опыт использования виртуальных машин (Virtual Machine Experience);</li>
                        <li>Опыт разработки на языках программирования (Programming Language Experience);</li>
                    </ul>
                </li>
                <li>Характеристики проекта (Project Аttributes):
                    <ul>
                        <li>Использование инструментария разработки ПО (Use of Software Tools);</li>
                        <li>Применение методов разработки ПО (Application of Software Engineering Methods);</li>
                        <li>Требования соблюдения графика разработки (Required Development Schedule).</li>
                    </ul>
                </li>
            </ul>
            <p>Значения каждого атрибута выбирается следующей таблицы в соответствии с его степенью значимости
                (рейтингом) в конкретном проекте.
            </p>
            <p className="text-center">
                <img src="intermediate_1.png" alt="Intermidate table"/>
            </p>
            <p>Формула промежуточного уровня модели имеет вид</p>
            <img src="intermediate_2.PNG" alt="Intermediate equation"/>,
            <p>где</p>
            <ul>
                <li>PM – трудоемкость (чел.×мес.);</li>
                <li>SIZE – объем программного продукта в тысячах строк исходного текста (Kilo of Source Line of Code –
                    KSLOC);
                </li>
                <li>EAF (Effort Adjustment Factor) – произведение выбранных атрибутов стоимости из таблицы выше: <img
                    src="intermediate_3.PNG" alt="Intermediate equation"/>
                </li>
            </ul>
            <p>Коэффициенты модели ai и bi выбираются из таблицы ниже.</p>
            <table className="table table-sm">
                <caption>Значения коэффициентов промежуточного уровня модели СОСОМО в зависимости от типа проекта
                </caption>
                <thead>
                <tr>
                    <th rowSpan="2">Тип проекта, i</th>
                    <th colSpan="2">Значения коэффициентов</th>
                </tr>
                <tr>
                    <th>ai</th>
                    <th>bi</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Распространенный</td>
                    <td>3,2</td>
                    <td>1,05</td>
                </tr>
                <tr>
                    <td>Полунезависимый</td>
                    <td>3,0</td>
                    <td>1,12</td>
                </tr>
                <tr>
                    <td>Встроенный</td>
                    <td>2,8</td>
                    <td>1,20</td>
                </tr>
                </tbody>
            </table>
            <p>
                Время разработки рассчитывается по той же формуле, что и для базовой
                модели.
            </p>
        </div>
    </React.Fragment>
)
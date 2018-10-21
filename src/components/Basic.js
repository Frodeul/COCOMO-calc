import React from "react"
import Modal from "react-responsive-modal"
import {findPMbyTypeAndSize, findTMbyTypeAndPM} from "../common/utils"
import {PROJECT_TYPE, RESULT_NAMES} from "../constants/common"
import {HintButton, Size, SubmitButton, Type} from "./Common"


export class Basic extends React.Component {

    state = {
        PM: null,
        size: 1,
        type: PROJECT_TYPE.COMMON,
        infoOpen: false
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
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
        const {type, size} = this.state
        const PM = findPMbyTypeAndSize(type, size)
        return [
            {name: RESULT_NAMES.PM, value: PM},
            {name: RESULT_NAMES.TM, value: findTMbyTypeAndPM(type, PM)}
        ]
    }

    render() {
        const {size, type, infoOpen} = this.state
        return (
            <form className="mb-4" onSubmit={this.onSubmit}>
                <HintButton onClick={this.openModal}/>
                <SubmitButton className="float-right"/>
                <Type value={type} handleChange={this.handleChange} TYPE={PROJECT_TYPE}/>
                <Size value={size} handleChange={this.handleChange}/>
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
            <h5 className="modal-title">Базовый уровень (Basic COCOMO)</h5>
        </div>
        <div className="modal-body">
            <p>Модель этого уровня – двухпараметрическая. В качестве параметров выступают тип проекта и объем программы
                (число строк кода).</p>
            <p><strong>Уравнения базового уровня</strong> модели имеют вид:</p>
            <img src="basic_1.png" alt="Basic equation"/>
            <p>где
                <ul>
                    <li>PM (People×Month) – трудоемкость (чел.×мес.);</li>
                    <li>TM (Time at Month) – время разработки в календарных месяцах;</li>
                    <li>SIZE – объем программного продукта в тысячах строк исходного текста
                        (Kilo of Source Line of Code – KSLOC).
                    </li>
                </ul>
            </p>
            <p> Коэффициенты ai, bi, ci и di выбираются из следующей таблицы.</p>
            <table className="table table-sm">
                <caption>Значения коэффициентов базовой уровня модели COCOMO в зависимости от типа проекта</caption>
                <thead>
                <tr>
                    <th>Тип проекта</th>
                    <th>a</th>
                    <th>b</th>
                    <th>c</th>
                    <th>d</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td> Распространенный</td>
                    <td>2,4</td>
                    <td>1,05</td>
                    <td>2,5</td>
                    <td>0,38</td>
                </tr>
                <tr>
                    <td>Полунезависимый</td>
                    <td>3,0</td>
                    <td>1,12</td>
                    <td>2,5</td>
                    <td>0,35</td>
                </tr>
                <tr>
                    <td> Встроенный</td>
                    <td>3,6</td>
                    <td>1,20</td>
                    <td>2,5</td>
                    <td>0,32</td>
                </tr>
                </tbody>
            </table>
            <p>
                Модель этого уровня подходит для ранней быстрой приблизительной оценки затрат, но точность её весьма
                низка, т.к. не учитываются такие факторы, как квалификация персонала, характеристики оборудования, опыт
                применения современных методов разработки программного обеспечения и современных инструментальных сред
                разработки и др.</p>
        </div>
    </React.Fragment>
)
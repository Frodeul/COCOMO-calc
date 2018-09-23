import React from "react"
import {PROJECT_TYPE, RESULT_NAMES} from "../constants/common"
import {findPMbyEAFtypeAndSize, findTMbyTypeAndPM, getCDeaf} from "../common/utils"
import {initialDrivers, intermediateData} from "../data/intermediateData"
import {Sections, Size, SubmitButton, Type} from "./Common"


export class Intermediate extends React.Component {

    state = {
        size: 1,
        type: PROJECT_TYPE.COMMON,
        costDrivers: initialDrivers
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
        const {size, type, costDrivers} = this.state
        return (
            <form className="mb-4" onSubmit={this.onSubmit}>
                <SubmitButton className="float-right"/>
                <Type value={type} handleChange={this.handleChange} TYPE={PROJECT_TYPE}/>
                <Size value={size} handleChange={this.handleChange}/>
                <Sections data={intermediateData} values={costDrivers} handleChange={this.handleDriversChange} label="Факторы затрат"/>
            </form>
        )
    }
}

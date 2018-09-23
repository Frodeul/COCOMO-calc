import React from "react"
import {findPMbyTypeAndSize, findTMbyTypeAndPM} from "../common/utils"
import {PROJECT_TYPE, RESULT_NAMES} from "../constants/common"
import {Type, Size, SubmitButton} from "./Common"


export class Basic extends React.Component {

    state = {
        PM: null,
        size: 1,
        type: PROJECT_TYPE.COMMON
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

    calculate = () => {
        const {type, size} = this.state
        const PM = findPMbyTypeAndSize(type, size)
        return [
            {name: RESULT_NAMES.PM, value: PM},
            {name: RESULT_NAMES.TM, value: findTMbyTypeAndPM(type, PM)}
        ]
    }

    render() {
        const {size, type} = this.state
        return (
            <form className="mb-4" onSubmit={this.onSubmit}>
                <SubmitButton className="float-right"/>
                <Type value={type} handleChange={this.handleChange} TYPE={PROJECT_TYPE}/>
                <Size value={size} handleChange={this.handleChange}/>
            </form>
        )
    }
}
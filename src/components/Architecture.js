import React from "react"
import {getArchitectureEMeaf, getArchitecturePM, getE, getSF, getTM_II} from "../common/utils"
import {ARCHITECTURE_EFFORTS_NAMES, ARCHITECTURE_EFFORTS_VALUES} from "../constants/architectureEfforts"
import {RESULT_NAMES} from "../constants/common"
import {architectureData, architectureInitialEfforts} from "../data/architectureData"
import {factorsData, initialFactors} from "../data/factorsData"
import {ScaleFactors, Sections, Size, SubmitButton} from "./Common"


export class Architecture extends React.Component {

    state = {
        size: 1,
        effortMultipliers: architectureInitialEfforts,
        scaleFactors: initialFactors
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleNestedChange = (type, e) => {
        const name = e.target.name
        const value = e.target.value
        this.setState(prevState => ({
            [type]: prevState[type].map(it => it.name === name ? {name, value} : it)
        }))
    }

    onSubmit = e => {
        e.preventDefault()
        this.props.setResults(this.calculate())
    }

    calculate = () => {
        const {size, effortMultipliers, scaleFactors} = this.state

        /* Расечт PM */
        const EAF = getArchitectureEMeaf(effortMultipliers)
        const SF = getSF(scaleFactors)
        const PM = getArchitecturePM(EAF, SF, size)

        /* Расчет TM */
        const SCEDvalue = effortMultipliers.find(it => it.name === ARCHITECTURE_EFFORTS_NAMES.SCED).value
        const SCED = ARCHITECTURE_EFFORTS_VALUES[ARCHITECTURE_EFFORTS_NAMES.SCED][SCEDvalue]
        const EAFns = getArchitectureEMeaf(effortMultipliers.filter(it => it.name !== ARCHITECTURE_EFFORTS_NAMES.SCED))
        const TM = getTM_II(SCED, getArchitecturePM(EAFns, SF, size), getE(SF))

        return [
            {name: RESULT_NAMES.PM, value: PM},
            {name: RESULT_NAMES.TM, value: TM},
            {name: RESULT_NAMES.SF, value: SF},
            {name: RESULT_NAMES.EAF, value: EAF}
        ]
    }

    render() {
        const {size, effortMultipliers, scaleFactors} = this.state
        return (
            <form className="mb-4" onSubmit={this.onSubmit}>
                <SubmitButton className="float-right"/>
                <Size value={size} handleChange={this.handleChange}/>
                <ScaleFactors data={factorsData} values={scaleFactors}
                              handleChange={(e) => this.handleNestedChange("scaleFactors", e)}/>
                <Sections data={architectureData} values={effortMultipliers} label="Множители трудоемкости"
                          handleChange={(e) => this.handleNestedChange("effortMultipliers", e)}/>
            </form>
        )
    }
}


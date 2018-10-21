import React from "react"
import uuidv4 from "uuid/v4"
import {getDesignEMeaf, getDesignPM, getE, getSF, getTM_II} from "../common/utils"
import {RESULT_NAMES} from "../constants/common"
import {DESIGN_EFFORTS_NAMES, DESIGN_EFFORTS_VALUES} from "../constants/designEfforts"
import {designData, designInitialEfforts} from "../data/designData"
import {factorsData, initialFactors} from "../data/factorsData"
import {ScaleFactors, Select, Size, SubmitButton} from "./Common"


export class Design extends React.Component {

    state = {
        size: 1,
        effortMultipliers: designInitialEfforts,
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
        const EAF = getDesignEMeaf(effortMultipliers)
        const SF = getSF(scaleFactors)
        const PM = getDesignPM(EAF, SF, size)

        /* Расчет TM */
        const SCEDvalue = effortMultipliers.find(it => it.name === DESIGN_EFFORTS_NAMES.SCED).value
        const SCED = DESIGN_EFFORTS_VALUES[DESIGN_EFFORTS_NAMES.SCED][SCEDvalue]
        const EAFns = getDesignEMeaf(effortMultipliers.filter(it => it.name !== DESIGN_EFFORTS_NAMES.SCED))
        const TM = getTM_II(SCED, getDesignPM(EAFns, SF, size), getE(SF))

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
                <Sections data={designData} values={effortMultipliers} label="Множители трудоемкости"
                          handleChange={(e) => this.handleNestedChange("effortMultipliers", e)}/>
            </form>
        )
    }
}

const Sections = ({data, values, handleChange, label}) =>
    <React.Fragment>
        <h3 className="text-center mb-2">{label}</h3>
        {data.map(d => (
            <div className="form-row d-flex align-items-end" key={uuidv4()}>
                {d.map(col =>
                    <div className="col-md-6" key={uuidv4()}>
                        <h5 className="mt-3 mb-4">{col.label}</h5>
                        <div className="form-row d-flex align-items-end">
                            {col.items.map(it =>
                                <Select {...it} value={values.find(v => v.name === it.name).value}
                                        handleChange={handleChange}
                                        key={uuidv4()} className="col-md-6"/>
                            )}
                        </div>
                    </div>
                )}
            </div>
        ))}
    </React.Fragment>
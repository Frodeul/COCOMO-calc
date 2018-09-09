import React, {Component} from "react"
import {Calc} from "./components/Calc"
import {Menu} from "./components/Menu"
import {Results} from "./components/Results"


class App extends Component {

    state = {
        results: []
    }

    setResults = results => {
        this.setState({
            results
        })
    }

    render() {
        const {results} = this.state
        return (
            <div className="container-fluid">
                <h1 className="text-center mb-5">COCOMO Калькулятор</h1>
                <div className="row">
                    <div className="col-4">
                        <Menu/>
                        <Results data={results}/>
                    </div>
                    <Calc setResults={this.setResults}/>
                </div>
            </div>
        )
    }
}

export default App

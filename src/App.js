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
                <div className="content-layout">
                    <main>
                        <h1 className="text-center mb-5">COCOMO Калькулятор</h1>
                        <div className="row">
                            <div className="col-4">
                                <Menu/>
                                <Results data={results}/>
                            </div>
                            <Calc setResults={this.setResults}/>
                        </div>
                    </main>
                    <footer>
                        <div className="text-secondary">
                            <p>© Шарубина А. С. Лабораторный практикум по программной инженерии. ТУСУР, 2018</p>
                            <p><a href="COCOMO.pdf">Загрузить учебное пособие</a></p>
                        </div>
                    </footer>
                </div>
            </div>
        )
    }
}

export default App

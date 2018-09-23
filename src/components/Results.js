import React from "react"
import uuidv4 from "uuid/v4"


export const Results = ({data}) => (
    <React.Fragment>
        <h3 className="mt-5">Результаты</h3>
        <table className="table table-hover results-table">
            <tbody>
            {data.map(it => (
                <tr key={uuidv4()}>
                    <td>{it.name}</td>
                    <td>{it.value.toFixed(2)}</td>
                </tr>
            ))}
            </tbody>
        </table>
    </React.Fragment>
)
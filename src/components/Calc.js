import React from "react"
import {Architecture} from "./Architecture"
import {Basic} from "./Basic"
import {Design} from "./Design"
import {Intermediate} from "./Intermediate"


export const Calc = props => (
    <div className="col-8">
        <div className="tab-content" id="nav-tabContent">
            <div className="tab-pane fade show active" id="list-basic" role="tabpanel"
                 aria-labelledby="list-basic-list"><Basic {...props}/>
            </div>
            <div className="tab-pane fade" id="list-intermediate" role="tabpanel"
                 aria-labelledby="list-intermediate-list" data-spy="scroll"><Intermediate {...props}/>
            </div>
            <div className="tab-pane fade" id="list-design" role="tabpanel"
                 aria-labelledby="list-design-list"><Design {...props}/>
            </div>
            <div className="tab-pane fade" id="list-architecture" role="tabpanel"
                 aria-labelledby="list-architecture-list"><Architecture {...props}/>
            </div>
        </div>
    </div>
)
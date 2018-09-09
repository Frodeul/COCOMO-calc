import React from "react"


export const Menu = () => (
    <div className="list-group" id="list-tab" role="tablist">
        <a className="list-group-item list-group-item-action disabled"><strong>COCOMO</strong></a>
        <a className="list-group-item list-group-item-action active" id="list-basic-list"
           data-toggle="list" href="#list-basic" role="tab" aria-controls="basic">Basic COCOMO</a>
        <a className="list-group-item list-group-item-action" id="list-intermediate-list"
           data-toggle="list"
           href="#list-intermediate" role="tab" aria-controls="intermediate">Intermediate COCOMO</a>
        <a className="list-group-item list-group-item-action disabled"><strong>COCOMO II</strong></a>
        <a className="list-group-item list-group-item-action" id="list-messages-list"
           data-toggle="list"
           href="#list-design" role="tab" aria-controls="design">Early Design</a>
        <a className="list-group-item list-group-item-action" id="list-design-list"
           data-toggle="list"
           href="#list-architecture" role="tab" aria-controls="architecture">Post
            Architecture</a>
    </div>
)
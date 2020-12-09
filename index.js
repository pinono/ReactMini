import React from './react'
import ReactDom from './react-dom'
const ele = (
    <div className="active" title="123">
        helleo,<span>React~</span>
    </div>
)

ReactDom.render(ele,document.querySelector('#root'))

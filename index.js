import React from './react'
import ReactDom from './react-dom'
const ele = (
    <section className="active" title="123">
        helleo,<span>React~</span>
    </section>
)

ReactDom.render(ele,document.querySelector('#root'))

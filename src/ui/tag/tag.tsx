import React, { Component } from 'react'
import './tag.sass'

type Props = {
    text?: string
}

export default class Tag extends Component<Props> {
    render() {
        const { text, children = 'Click' } = this.props
        const value = text || children
        return (
            <div className="tag">
                {value}
            </div>
        )
    }
}

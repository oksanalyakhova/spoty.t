import React, { Component } from 'react'
import './tag.sass'

type Props = {
    text?: string
}

export default class Tag extends Component<Props> {
    render() {
        return (
            <div className="tag">
                {this.props.text}
            </div>
        )
    }
}

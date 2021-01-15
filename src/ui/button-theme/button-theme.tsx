import React, { Component } from 'react'
import './button-theme.sass'

type State = {}
type Props = {
    text?: string,
    disable?: boolean,
    className?: string,
    onClick: Function
}

export default class ButtonTheme extends Component<Props, State> {
    render() {
        const { text, disable, className, onClick, children = 'Click' } = this.props
        const value = text || children
        return (
            <button
                className={disable ? `${className} is-disabled` : className}
                onClick={(e) => onClick(e)}>
                {value}
            </button>
        )
    }
}

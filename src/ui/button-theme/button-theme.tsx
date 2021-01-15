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
        const { text, disable, onClick, children = 'Click' } = this.props
        const value = text || children
        return (
            <button
                className={disable ? `button button-theme is-disabled` : `button button-theme`}
                onClick={(e) => onClick(e)}>
                <div className={'button__top button-theme__top'}>{value}</div>
                <div className={'button__bottom button-theme__bottom'}>{value}</div>
            </button>
        )
    }
}

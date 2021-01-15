import React, { Component } from 'react'
import Icon from 'react-native-ionicons'
import './button-play.sass'

type State = {}
type Props = {
    text?: string,
    active?: boolean,
    className?: string,
    onClick: Function
}

export default class ButtonPlay extends Component<Props, State> {
    render() {
        const { text, active, className, onClick, children = 'Click' } = this.props
        const value = text || children
        return (
            <button
                className={active ? `${className} is-active` : className}
                onClick={(e) => onClick(e)}>
                <Icon name="play"/>
                {value}
            </button>
        )
    }
}

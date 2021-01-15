import React, { Component } from 'react'
import Icon from 'react-native-ionicons'
import './tag.sass'

type State = {}
type Props = {
    text?: string,
    disable?: boolean,
    className?: string,
    onClick: Function
}

export default class Tag extends Component<Props, State> {
    render() {
        const { text, disable, className, onClick, children = 'Click' } = this.props
        const value = text || children
        return (
            <button
                className={disable ? `disable ${className}` : className}
                onClick={(e) => onClick(e)}>
                <Icon name="play"/>
                {value}
            </button>
        )
    }
}

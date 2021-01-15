import React, { Component } from 'react'
import './button-play.sass'
import { IoPlaySharp } from 'react-icons/io5'

type State = {}
type Props = {
    text?: string,
    active?: boolean,
    className?: string,
    onClick: Function
}

export default class ButtonPlay extends Component<Props, State> {
    render() {
        const { text, active, onClick, children = 'Click' } = this.props
        const value = text || children
        return (
            <button
                className={active ? `button button-play is-active` : `button button-play`}
                onClick={(e) => onClick(e)}>
                <div className={'button__top button-play__top'}>
                    <IoPlaySharp />
                    {value}
                </div>
                <div className={'button__bottom button-play__bottom'}>
                    <IoPlaySharp />
                    {value}
                </div>
            </button>
        )
    }
}

import React, { Component } from 'react'
import './button-more.sass'
import { IoEllipsisHorizontal } from 'react-icons/io5'

type State = {}
type Props = {
    active?: boolean,
    className?: string,
    onClick: Function
}

export default class ButtonMore extends Component<Props, State> {
    render() {
        const { active, onClick, children = 'Click' } = this.props
        const value = children
        return (
            <button
                className={active ? `button button-more is-active` : `button button-more`}
                onClick={(e) => onClick(e)}>
                <IoEllipsisHorizontal />
            </button>
        )
    }
}

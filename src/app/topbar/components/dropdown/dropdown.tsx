import React, { FunctionComponent, useState } from 'react';
import { IoChevronDownSharp } from 'react-icons/all';

import './dropdown.sass';

interface DropdownProps {
    items: any,
}

const Dropdown: FunctionComponent<DropdownProps> = ({
    items
}): JSX.Element => {
    const listItems = items.map((item: { url: string | undefined; text: React.ReactNode; },
                                 index: string | number | null | undefined) =>
        <li key={index} className="list__item">
            <a href={item.url}>
                {item.text}
            </a>
        </li>
    );

    const [isActive, setActive] = useState(false)
    const handleToggle = () => {
        setActive(!isActive);
    };

    return (
        <div className="dropdown">
            <button type="button"
                    className={`${isActive? 'dropdown__button button button-dropdown is-active': 'dropdown__button button button-dropdown'}`}
                    onClick={handleToggle}>
                <IoChevronDownSharp />
            </button>
            <ul className={`${isActive? 'is-visible': 'is-hidden'} dropdown__list list`}>
                {listItems}
            </ul>
        </div>
    )
};

Dropdown.defaultProps = {
    items: []
};

export default Dropdown;

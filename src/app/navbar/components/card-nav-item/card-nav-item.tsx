import React, { FunctionComponent } from 'react';

import './card-nav-item.sass';

interface CardNavItemProps {
    className?: string
}

const CardNavItem: FunctionComponent<CardNavItemProps> = ({
    className
}): JSX.Element => {
    return (
        <div className={className? `${className} card-nav` : `card-nav`}>

        </div>
    )
};

export default CardNavItem;

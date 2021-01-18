import React, { FunctionComponent } from 'react';

import './navbar-view.sass';

interface NavbarProps {
    className?: string
}

const Navbar: FunctionComponent<NavbarProps> = ({
    className
}): JSX.Element => {
    return (
        <div className={className? `${className} navbar` : `navbar`}>

        </div>
    )
};

Navbar.defaultProps = {
    className: ''
}

export default Navbar;

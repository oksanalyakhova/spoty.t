import React, { FunctionComponent } from 'react';
import Accordion from '../components/accordion/accordion';
import AddPlaylist from '../components/add-playlist/add-playlist';
import Playing from '../components/playing/playing';

import './navbar-view.sass';

interface NavbarProps {
    className?: string
}

const Navbar: FunctionComponent<NavbarProps> = ({
    className
}): JSX.Element => {
    return (
        <div className={className? `${className} navbar` : `navbar`}>
            <Accordion />
            <AddPlaylist />
            <Playing />
        </div>
    )
};

Navbar.defaultProps = {
    className: ''
}

export default Navbar;

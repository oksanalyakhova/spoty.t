import React, { FunctionComponent } from 'react';

import './main-nav.sass';

interface MainNavProps {
    className?: string
}

const MainNav: FunctionComponent<MainNavProps> = ({
    className
}): JSX.Element => {
    return (
        <div className={className? `${className} main-nav` : `main-nav`}>

        </div>
    )
};

export default MainNav;

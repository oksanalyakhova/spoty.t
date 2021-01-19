import React, {FunctionComponent} from 'react';
import Navbar from '../../navbar/navbar-view/navbar-view';
import Artist from '../../artist/artist-view/artist-view';
import Sidebar from '../../sidebar/sidebar-view/sidebar-view';

import './main-view.sass';

interface MainProps {
    className?: string
}

const Main: FunctionComponent<MainProps> = ({
    className
}): JSX.Element => {
    return (
        <div className={`${className ? className + " main" : "main"}`}>
            <Navbar className="app__navbar" />
            <Artist className="app__artist" />
            <Sidebar className="app__sidebar" />
        </div>
    );
}

export default Main;

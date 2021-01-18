import React, { FunctionComponent } from 'react';
import Search from '../components/search/search';
import User from '../components/user/user';
import TopbarNav from '../components/topbar-nav/topbar-nav';

import './topbar-view.sass';

interface TopbarProps {
    className?: string
}

const Topbar: FunctionComponent<TopbarProps> = ({
    className
}): JSX.Element => {
    return (
        <div className={`${className ? className + " topbar" : "topbar"}`}>
            <TopbarNav className="topbar__page-flows"
                       onClickPrev={() => {console.log('prev was clicked')}}
                       onClickNext={() => {console.log('next was clicked')}}
                       disabledNext={true}/>
            <Search className="topbar__search" />
            <User className="topbar__user" />
        </div>
    )
};

Topbar.defaultProps = {
    className: ''
}

export default Topbar;

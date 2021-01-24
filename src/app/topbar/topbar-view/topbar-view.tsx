import React, {FunctionComponent} from 'react';
import Search from '../components/search/search';
import User from '../components/user/user';
import TopbarNav from '../components/topbar-nav/topbar-nav';
import userImg from '@images/user.jpg';

import './topbar-view.sass';

interface TopbarProps {
  className?: string
}

const Topbar: FunctionComponent<TopbarProps> = ({
                                                  className
                                                }): JSX.Element => {
  const user = {
    name: 'Adam Lowenthal',
    src: `${userImg}`
  };
  const dropdownItems = [
    {
      id: 1,
      url: "#",
      text: "Private Session",
    },
    {
      id: 2,
      url: "#",
      text: "Account",
    },
    {
      id: 3,
      url: "#",
      text: "Settings",
    },
    {
      id: 4,
      url: "#",
      text: "Log Out",
    },
  ];

  return (
    <div id="topbar" className={`${className ? className + " topbar" : "topbar"}`}>
      <TopbarNav className="topbar__page-flows"
                 onClickPrev={() => {
                   console.log('prev was clicked')
                 }}
                 onClickNext={() => {
                   console.log('next was clicked')
                 }}
                 disabledNext={true}/>
      <Search className="topbar__search"/>
      <User className="topbar__user"
            user={user}
            dropdownItems={dropdownItems}
      />
    </div>
  )
};

Topbar.defaultProps = {
  className: ''
}

export default Topbar;

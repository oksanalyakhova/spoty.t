import React, { forwardRef } from 'react';
import Search from '../components/search/search';
import User from '../components/user/user';
import TopbarNav from '../components/topbar-nav/topbar-nav';
import { ISiteTypes } from '../../../types/siteTypes';

import './topbar-view.sass';

interface TopbarProps {
  local: ISiteTypes;
}

const Topbar = forwardRef<HTMLDivElement, TopbarProps>((props, ref) => {
  const user = props.local.user;
  const menuItems = props.local.accountMenu;

  return (
    <div className="topbar" ref={ref} {...props}>
      <TopbarNav
        className="topbar__page-flows"
        onClickPrev={() => {
          console.log('prev was clicked');
        }}
        onClickNext={() => {
          console.log('next was clicked');
        }}
        disabledNext={true}
      />
      <Search className="topbar__search" />
      <User className="topbar__user" user={user} dropdownItems={menuItems} />
    </div>
  );
});

export default Topbar;

import React, {forwardRef} from 'react';
import Search from '../components/search/search';
import User from '../components/user/user';
import TopbarNav from '../components/topbar-nav/topbar-nav';
import local from '../../../local.json';

import './topbar-view.sass';

const Topbar = forwardRef<HTMLDivElement>((props, ref) => {
  const user = local.user;
  const dropdownItems = local.accountMenu;

  return (
    <div className="topbar"
         ref={ref}>
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
  );
});

export default Topbar;

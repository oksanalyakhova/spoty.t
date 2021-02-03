import React, {FunctionComponent, useContext} from 'react';
import AppContext from '../../../AppContext';
import BlockFriends from '../components/block-friends/block-friends';
import ButtonTheme from '../../../ui/button-theme/button-theme';
import local from '../../../local.json';

import './sidebar-view.sass';

interface SidebarProps {
  topHeight: number;
  trackHeight: number;
}

const Sidebar : FunctionComponent<SidebarProps> = ({
  topHeight,
  trackHeight
}): JSX.Element => {
  const friends = local.findFriends;

  const myContext = useContext(AppContext);
  const breakpoint = myContext.windowWidth > 768 && myContext.windowWidth > myContext.windowHeight;
  let socialsHeight;
  if (breakpoint) socialsHeight = myContext.windowHeight - topHeight - trackHeight;

  return (
    <div className="sidebar"
         style={{height: socialsHeight}}>
      <div className="sidebar__socials socials">
        <BlockFriends friends={friends}/>
        <ButtonTheme
          text="find friends"
          isDisabled={false}
          onClick={() => {
            console.log("theme was clicked")
          }}
        />
      </div>
    </div>
  )
};

export default Sidebar;

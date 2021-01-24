import React, { FunctionComponent, useContext } from 'react';
import AppContext from '../../../AppContext';
import BlockFriends from '../components/block-friends/block-friends';
import ButtonTheme from '../../../ui/button-theme/button-theme';

import friend1 from '@images/friend1.jpg';
import friend2 from '@images/friend2.jpg';
import friend3 from '@images/friend3.jpg';
import friend4 from '@images/friend4.jpg';

import './sidebar-view.sass';

interface SidebarProps {
   className?: string
}

const Sidebar: FunctionComponent<SidebarProps> = ({
   className
}): JSX.Element => {
  const friends = [
      {
        id: 1,
        url: 'some/page',
        name: 'Rachel Green'
      },
      {
        id: 2,
        url: 'some/page',
        src: `${friend3}`,
        name: 'Monica Geller'
      },
      {
        id: 3,
        url: 'some/page',
        src: `${friend2}`,
        name: 'Chandler Bing'
      },
      {
        id: 4,
        url: 'some/page',
        src: `${friend1}`,
        name: 'Joey Tribbiani'
      },
      {
        id: 5,
        url: 'some/page',
        name: 'Ross Geller'
      },
      {
        id: 6,
        url: 'some/page',
        src: `${friend4}`,
        name: 'Phoebe Buffay'
      }
    ]

    const myContext = useContext(AppContext);
    const breakpoint = 768;
    const condition = myContext.windowWidth > breakpoint && myContext.windowWidth > myContext.windowHeight;
    let socialsHeight;
    if (condition) socialsHeight = myContext.windowHeight - 126;

    return (
        <div className={`${className ? className + " sidebar" : "sidebar"}`}
             style={{height: socialsHeight}}>
            <div className="socials">
                <BlockFriends friends={friends} />
                <ButtonTheme
                    text="find friends"
                    isDisabled={false}
                    onClick={() => {
                        console.log("theme was clicked")}}
                />
            </div>
        </div>
    )
};

export default Sidebar;

import React, {FunctionComponent, useContext} from 'react';
import AppContext from '../../../../AppContext';
import Accordion from '../accordion/accordion';
import classNames from 'classnames';
import {
  IoIosBrowsers,
  ImUsers,
  IoRadio,
  FaHeadphones,
  ImUser,
  AiOutlineFile
} from 'react-icons/all';

import './accordions.sass';

interface AccordionsProps {
  className?: string;
  topHeight: number;
  trackHeight: number;
}

const nav = [
  {
    id: 1,
    name: 'main',
    items: [
      {
        id: 11,
        url: 'some/page',
        icon: <IoIosBrowsers/>,
        name: 'Browse'
      },
      {
        id: 12,
        url: 'some/page',
        icon: <ImUsers/>,
        name: 'Activity'
      },
      {
        id: 13,
        url: 'some/page',
        icon: <IoRadio/>,
        name: 'Radio'
      }
    ]
  },
  {
    id: 2,
    name: 'your music',
    items: [
      {
        id: 21,
        url: 'some/page',
        icon: <FaHeadphones/>,
        name: 'Songs'
      },
      {
        id: 22,
        url: 'some/page',
        name: 'Albums'
      },
      {
        id: 23,
        url: 'some/page',
        icon: <ImUser/>,
        name: 'Artists'
      },
      {
        id: 24,
        url: 'some/page',
        icon: <AiOutlineFile/>,
        name: 'Local Files'
      }
    ]
  },
  {
    id: 3,
    name: 'playlists',
    items: [
      {
        id: 31,
        url: 'some/page',
        name: 'Doo Wop'
      },
      {
        id: 32,
        url: 'some/page',
        name: 'Pop Classics'
      },
      {
        id: 33,
        url: 'some/page',
        name: 'Love $ongs'
      },
      {
        id: 34,
        url: 'some/page',
        name: 'Hipster'
      },
      {
        id: 35,
        url: 'some/page',
        name: 'New Music Friday'
      },
      {
        id: 36,
        url: 'some/page',
        name: 'Techno Poppers'
      },
      {
        id: 37,
        url: 'some/page',
        name: 'Summer Soothers'
      },
      {
        id: 38,
        url: 'some/page',
        name: 'Hard Rap'
      },
      {
        id: 39,
        url: 'some/page',
        name: 'Pop Rap'
      },
      {
        id: 40,
        url: 'some/page',
        name: '5 Stars'
      },
      {
        id: 41,
        url: 'some/page',
        name: 'Dope Dancin'
      },
      {
        id: 42,
        url: 'some/page',
        name: 'Sleep'
      }
    ]
  }
]

const Accordions: FunctionComponent<AccordionsProps> = ({
  className,
  topHeight,
  trackHeight
}): JSX.Element => {
  const myContext = useContext(AppContext);
  const breakpoint = myContext.windowWidth > 768 && myContext.windowWidth > myContext.windowHeight;
  let navHeight;
  if (breakpoint) navHeight = myContext.windowHeight - topHeight - trackHeight - 117;

  const listsNav = nav.map((item, index) =>
    <Accordion
      key={item.id}
      name={item.name}
      nav={item.items}
    />
  );

  const classes = classNames(className, 'accordions')

  return (
    <div className={classes}
         style={{height: navHeight}}>
      {listsNav}
    </div>
  )
};

export default Accordions;

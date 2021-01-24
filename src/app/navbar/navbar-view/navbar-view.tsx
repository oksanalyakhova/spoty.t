import React, {FunctionComponent, useContext} from 'react';
import AppContext from '../../../AppContext';
import Accordions from '../components/accordions/accordions';
import AddPlaylist from '../components/add-playlist/add-playlist';
import Playing from '../components/playing/playing';
import cputh from '@images/cputh.jpg';

import './navbar-view.sass';

interface NavbarProps {
  className?: string
}

const Navbar: FunctionComponent<NavbarProps> = ({
                                                  className
                                                }): JSX.Element => {
  const playing = {
    id: 1,
    src: `${cputh}`,
    title: {
      name: 'Some Type of Love',
      url: 'some/page'
    },
    artist: {
      name: 'Charlie Puth',
      url: 'some/page'
    },
    isAdded: true
  }

  const myContext = useContext(AppContext);
  const breakpoint = 768;
  const condition = myContext.windowWidth > breakpoint;
  let addPlaylist;
  if (condition) addPlaylist = <AddPlaylist/>;

  return (
    <div className={className ? `${className} navbar` : `navbar`}>
      <Accordions/>
      {addPlaylist}
      <Playing playing={playing}/>
    </div>
  )
};

Navbar.defaultProps = {
  className: ''
}

export default Navbar;

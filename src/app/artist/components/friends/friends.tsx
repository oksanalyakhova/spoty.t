import React, {FunctionComponent} from 'react';
import {IFriend} from '../../../../types/siteTypes';

import './friends.sass';

interface FriendsProps {
  friends: Array<IFriend>
}

const Friends: FunctionComponent<FriendsProps> = ({
  friends
}): JSX.Element => {
  const navFriends = friends.map((friend) =>
    <a key={friend.id} href={friend.url} className="friends__item">
      <img src={friend.src} alt={friend.name}/>
    </a>
  );

  return (
    <div className="friends">
      {navFriends}
    </div>
  )
}

export default Friends;

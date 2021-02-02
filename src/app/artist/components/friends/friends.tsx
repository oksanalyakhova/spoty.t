import React, {FunctionComponent} from 'react';

import './friends.sass';
import {ISiteTypes} from '../../../../types/siteTypes';

interface FriendProps {
  id: string | number,
  url: string,
  src: string,
  name: string,
}

interface FriendsProps {
  friends: Array<FriendProps>
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

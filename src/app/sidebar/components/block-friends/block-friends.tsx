import React, {FunctionComponent} from 'react';
import CardFriends from '../card-friends/card-friends';
import {IFriend} from '../../../../types/siteTypes';

import './block-friends.sass';

interface BlockFriendsProps {
  friends: Array<IFriend>;
}

const BlockFriends: FunctionComponent<BlockFriendsProps> = ({
  friends,
}): JSX.Element => {
  const listFriends = friends.map((friend, index) =>
    <CardFriends
      key={friend.id}
      friend={friend}
    />
  );

  return (
    <div className="friends friends_sidebar">
      {listFriends}
    </div>
  )
}

export default BlockFriends;

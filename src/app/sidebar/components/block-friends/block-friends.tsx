import React, {FunctionComponent} from 'react';
import CardFriends from '../card-friends/card-friends';

import './block-friends.sass';

interface CardFriendsProps {
  id: string | number;
  url: string;
  src?: string;
  name: string;
}

interface BlockFriendsProps {
  friends: Array<CardFriendsProps>
}

const BlockFriends: FunctionComponent<BlockFriendsProps> = ({
                                                              friends,
                                                            }): JSX.Element => {
  const listTracks = friends.map((friend, index) =>
    <CardFriends
      key={friend.id}
      friend={friend}
    />
  );

  return (
    <div className="friends friends_sidebar">
      {listTracks}
    </div>
  )
}

export default BlockFriends;

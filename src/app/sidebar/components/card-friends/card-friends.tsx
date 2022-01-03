import React, { FunctionComponent } from 'react';
import { MdPerson } from 'react-icons/md';
import { IFriend } from '../../../../types/siteTypes';

import './card-friends.sass';

interface CardFriendsProps {
  friend: IFriend;
}

const CardFriends: FunctionComponent<CardFriendsProps> = ({
  friend,
}): JSX.Element => {
  return (
    <a href={friend.url} className="friend friend_sidebar">
      <span className="friend__img">
        {friend.src ? <img src={friend.src} alt={friend.name} /> : <MdPerson />}
      </span>
      <span className="friend__name">{friend.name}</span>
    </a>
  );
};

export default CardFriends;

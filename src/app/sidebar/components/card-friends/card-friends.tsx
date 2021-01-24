import React, { FunctionComponent } from 'react';
import { MdPerson } from 'react-icons/md';

import './card-friends.sass';

interface CardFriendsHekpsProps {
  id: string | number;
  url: string;
  src?: string;
  name: string;
}

interface CardFriendsProps {
    friend: CardFriendsHekpsProps
}

const CardFriends: FunctionComponent<CardFriendsProps> = ({
    friend
}): JSX.Element => {
    return (
        <a href={friend.url}
           className="friend friend_sidebar">
            <span className="friend__img">
                {friend.src
                    ? <img src={friend.src} alt={friend.name} />
                    : <MdPerson />
                }
            </span>
            <span className="friend__name">
                {friend.name}
            </span>
        </a>
    )
}

export default CardFriends;


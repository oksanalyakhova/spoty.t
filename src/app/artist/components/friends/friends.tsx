import React from 'react';
import useFetch from '../../../../useFetch';

import {IFriend} from '../../../../types/siteTypes';

import './friends.sass';

const Friends= () => {
  const url = `https://raw.githubusercontent.com/oksanalyakhova/spoty.t.datas/main/friends.json`;
  const {data} = useFetch<IFriend[]>(url);

  const navFriends = data?.map((friend) =>
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

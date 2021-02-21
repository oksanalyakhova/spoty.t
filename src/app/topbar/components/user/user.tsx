import React, {FunctionComponent} from 'react';
import Notifications from '../notifications/notifications';
import Dropdown from '../dropdown/dropdown';
import Inbox from '../inbox/inbox';
import classNames from 'classnames';
import {IUser, IAccountMenu} from '../../../../types/siteTypes';

import './user.sass';

interface UserProps {
  className?: string;
  user: IUser;
  dropdownItems: Array<IAccountMenu>;
}

const User: FunctionComponent<UserProps> = ({
  className,
  user,
  dropdownItems
}): JSX.Element => {
  const classes = classNames(className, 'user')

  return (
    <div className={classes}>
      <Notifications className="user__item user__notifications"/>
      <Inbox className="user__item user__inbox"/>
      <div className="user__item user__info info">
        <div className="info__img">
          <img src={user.src} alt={user.name}/>
        </div>
        <div className="info__name">
          {user.name}
        </div>
      </div>
      <div className="user__item user__actions">
        <Dropdown items={dropdownItems}/>
      </div>
    </div>
  )
};

export default User;

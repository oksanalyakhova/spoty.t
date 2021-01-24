import React, {FunctionComponent} from 'react';
import Notifications from '../notifications/notifications';
import Dropdown from '../dropdown/dropdown';
import Inbox from '../inbox/inbox';

import './user.sass';

interface UserHelpsProps {
  name: string;
  src: string;
}

interface UserMenuProps {
  id: string | number;
  url: string;
  text: string;
}

interface UserProps {
  className?: string;
  user: UserHelpsProps;
  dropdownItems: Array<UserMenuProps>
}

const User: FunctionComponent<UserProps> = ({
                                              className,
                                              user,
                                              dropdownItems
                                            }): JSX.Element => {
  return (
    <div className={`${className ? className + " user" : "user"}`}>
      <Notifications className="user__notifications"/>
      <Inbox className="user__inbox"/>
      <div className="user__info info">
        <div className="info__img">
          <img src={user.src} alt={user.name}/>
        </div>
        <div className="info__name">
          {user.name}
        </div>
      </div>
      <div className="user__actions">
        <Dropdown items={dropdownItems}/>
      </div>
    </div>
  )
};

User.defaultProps = {
  className: ''
}

export default User;

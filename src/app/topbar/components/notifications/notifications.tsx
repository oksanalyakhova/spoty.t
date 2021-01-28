import React, {FunctionComponent} from 'react';
import {IoNotifications} from 'react-icons/all';
import classNames from 'classnames';

import './notifications.sass';

interface NotificationsProps {
  className?: string;
}

const Notifications: FunctionComponent<NotificationsProps> = ({
  className
}): JSX.Element => {
  const classes = classNames(className, 'notifications')

  return (
    <a href="/notifications/page" className={classes}>
      <IoNotifications/>
      {/*<span className="count"></span>*/}
    </a>
  )
};

export default Notifications;

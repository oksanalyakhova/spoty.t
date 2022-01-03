import React, {FunctionComponent, useEffect, useState} from 'react';
import {FaInbox} from 'react-icons/all';
import classNames from 'classnames';

import './inbox.sass';

interface InboxProps {
  className?: string;
}

const Inbox: FunctionComponent<InboxProps> = ({
  className
}): JSX.Element => {
  const [inbox, setInbox] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setInbox(inbox => inbox + 1);
      if (inbox === 10) resetInterval();
    }, 50000);
    return () => clearInterval(interval);
  });

  const resetInterval = () => setInbox(0);

  const classes = classNames(className, 'inbox')

  return (
    <a href="/inbox/page" className={classes}>
      <FaInbox/>
      {inbox > 0 &&
      <span className="count">{inbox}</span>
      }
    </a>
  )
};

export default Inbox;

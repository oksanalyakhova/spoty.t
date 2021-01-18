import React, { FunctionComponent, useEffect, useState } from 'react';
import { FaInbox } from 'react-icons/all';

import './inbox.sass';

interface InboxProps {
    className?: string
}

const Inbox: FunctionComponent<InboxProps> = ({
   className
}): JSX.Element => {
    const [inbox, setInbox] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setInbox(inbox => inbox + 1);
            if (inbox === 10) resetInterval();
        }, 5000);
        return () => clearInterval(interval);
    });

    const resetInterval = () => setInbox(0);

    return (
        <a href="/inbox/page" className={`${className} inbox`}>
            <FaInbox />
            {inbox > 0 &&
                <span className="count">{inbox}</span>
            }
        </a>
    )
};

export default Inbox;

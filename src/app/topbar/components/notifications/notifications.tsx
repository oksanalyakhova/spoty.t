import React, { FunctionComponent } from 'react';
import { IoNotifications } from 'react-icons/all';

import './notifications.sass';

interface NotificationsProps {
    className?: string
}

const Notifications: FunctionComponent<NotificationsProps> = ({
    className
}): JSX.Element => {
    return (
        <a href="/notifications/page" className={`${className ? className + " notifications" : "notifications"}`}>
            <IoNotifications />
            {/*<span className="count"></span>*/}
        </a>
    )
};

export default Notifications;

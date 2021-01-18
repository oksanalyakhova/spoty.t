import React, { FunctionComponent } from 'react';
import Notifications from '../notifications/notifications';
import Dropdown from '../dropdown/dropdown';
import Inbox from '../inbox/inbox';
import userImg from '@images/user.jpg';

import './user.sass';

interface UserProps {
    className?: string
}

const userName = 'Adam Lowenthal';
const dropdownItems = [
    {
        url: "#",
        text: "Private Session",
    },
    {
        url: "#",
        text: "Account",
    },
    {
        url: "#",
        text: "Settings",
    },
    {
        url: "#",
        text: "Log Out",
    },
];

const User: FunctionComponent<UserProps> = ({
    className
}): JSX.Element => {
    return (
        <div className={`${className ? className + " user" : "user"}`}>
            <Notifications className="user__notifications" />
            <Inbox className="user__inbox" />
            <div className="user__info info">
                <div className="info__img">
                    <img src={userImg} alt={userName} />
                </div>
                <div className="info__name">
                    {userName}
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

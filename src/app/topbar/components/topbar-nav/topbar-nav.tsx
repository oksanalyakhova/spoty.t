import React, { FunctionComponent } from 'react';
import { IoChevronBackSharp, IoChevronForwardSharp } from 'react-icons/io5';

import './topbar-nav.sass';

interface TopbarNavProps {
    className: string,
    disabledPrev?: boolean,
    disabledNext?: boolean,
    onClickPrev: (e: React.MouseEvent<HTMLDivElement>) => void,
    onClickNext: (e: React.MouseEvent<HTMLDivElement>) => void
}

const TopbarNav: FunctionComponent<TopbarNavProps> = ({
    className,
    disabledPrev,
    disabledNext,
    onClickPrev,
    onClickNext
}): JSX.Element => {
    return (
        <div className={`${className ? className + " page-flows" : "page-flows"}`}>
            <div className={disabledPrev ? `page-flows__item page-flows__item_left is-disabled` :
                `page-flows__item page-flows__item_left`}
                 onClick={(e) => onClickPrev(e)}>
                <IoChevronBackSharp />
            </div>
            <div className={disabledNext ? `page-flows__item page-flows__item_right is-disabled` :
                `page-flows__item page-flows__item_right`}
                 onClick={(e) => onClickNext(e)}>
                <IoChevronForwardSharp />
            </div>
        </div>
    )
}

TopbarNav.defaultProps = {
    className: ''
}

export default TopbarNav;


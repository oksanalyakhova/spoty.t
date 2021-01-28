import React, {FunctionComponent} from 'react';
import {IoChevronBackSharp, IoChevronForwardSharp} from 'react-icons/io5';
import classNames from 'classnames';

import './topbar-nav.sass';

interface TopbarNavProps {
  className: string;
  disabledPrev?: boolean;
  disabledNext?: boolean;
  onClickPrev: (e: React.MouseEvent<HTMLDivElement>) => void;
  onClickNext: (e: React.MouseEvent<HTMLDivElement>) => void;
}

const TopbarNav: FunctionComponent<TopbarNavProps> = ({
  className,
  disabledPrev,
  disabledNext,
  onClickPrev,
  onClickNext
}): JSX.Element => {
  const classesFlows = classNames(className, 'page-flows');
  const classesPrev = classNames('page-flows__item page-flows__item_left', {
    'is-disabled': disabledPrev
  });
  const classesNext = classNames('page-flows__item page-flows__item_right', {
    'is-disabled': disabledNext
  })

  return (
    <div className={classesFlows}>
      <div className={classesPrev}
           onClick={(e) => onClickPrev(e)}>
        <IoChevronBackSharp/>
      </div>
      <div className={classesNext}
           onClick={(e) => onClickNext(e)}>
        <IoChevronForwardSharp/>
      </div>
    </div>
  )
}

export default TopbarNav;


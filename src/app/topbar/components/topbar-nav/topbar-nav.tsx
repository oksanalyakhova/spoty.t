import React, {FunctionComponent} from 'react';
import TopbarNavItem from '../topbar-nav-item/topbar-nav-item';
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

  return (
    <div className={classesFlows}>
      <TopbarNavItem direction="prev"
                     disabled={disabledPrev}
                     onClick={(e) => onClickPrev(e)} />
      <TopbarNavItem direction="next"
                     disabled={disabledNext}
                     onClick={(e) => onClickNext(e)} />
    </div>
  )
}

export default TopbarNav;


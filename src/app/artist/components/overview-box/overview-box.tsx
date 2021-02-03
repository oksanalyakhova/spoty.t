import React, {FunctionComponent} from 'react';

import './overview-box.sass';

interface OverviewBoxProps {
  title: string;
  children: any;
}

const OverviewBox: FunctionComponent<OverviewBoxProps> = ({
  title,
  children,
}): JSX.Element => {
  return (
    <div className="overview-box">
      <div className="overview-box__title">
        {title}
      </div>
      <div className="overview-box__content">
        {children}
      </div>
    </div>
  )
}

export default OverviewBox;

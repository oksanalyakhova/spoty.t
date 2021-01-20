import React, { FunctionComponent } from 'react';

import './playing.sass';

interface PlayingProps {
    className?: string
}

const Playing: FunctionComponent<PlayingProps> = ({
    className
}): JSX.Element => {
    return (
        <div className={className? `${className} playing` : `playing`}>

        </div>
    )
};

export default Playing;

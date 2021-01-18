import React, { FunctionComponent } from 'react';
import {
    Slider,
} from '@reach/slider';

import './progress.sass';
import '@reach/slider/styles.css';

interface ProgressProps {
    className: string,
}

const Progress: FunctionComponent<ProgressProps> = ({
    className,
}): JSX.Element => {
    return (
        <div className={className? `${className} progress`: `progress`}>
            <div className="progress__start">0:01</div>
            <div className="progress__slider progressbar">
                <Slider min={0} max={100} step={0.01} />
            </div>
            <div className="progress__finish">3:07</div>
        </div>
    )
}

export default Progress;


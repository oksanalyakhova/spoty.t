import React, { FunctionComponent } from 'react';
import './latest-release.sass';

interface LatestReleaseProps {
    releaseCover?: string
    releaseName?: string,
    releaseDate?: string
}

const LatestRelease: FunctionComponent<LatestReleaseProps> = ({
    releaseCover,
    releaseName,
    releaseDate
}): JSX.Element => {
    return (
        <div className="latest-release">
            <div className="latest-release__art">
                <img src={releaseCover} alt={releaseName}/>
            </div>
            <div className="latest-release__song song">
                <div className="song__title">{releaseName}</div>
                <div className="song__date">{releaseDate}</div>
            </div>
        </div>
    )
}

export default LatestRelease;

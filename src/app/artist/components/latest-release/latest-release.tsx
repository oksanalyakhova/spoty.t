import React, { FunctionComponent } from 'react';
import './latest-release.sass';

interface ReleaseProps {
    id: string | number;
    src: string;
    year: string;
    name: string;
}

interface LatestReleaseProps {
    release: ReleaseProps
}

const LatestRelease: FunctionComponent<LatestReleaseProps> = ({
    release
}): JSX.Element => {
    return (
        <div className="latest-release">
            <div className="latest-release__art">
                <img src={release.src} alt={release.name}/>
            </div>
            <div className="latest-release__song song">
                <div className="song__title">{release.name}</div>
                <div className="song__date">{release.year}</div>
            </div>
        </div>
    )
}

export default LatestRelease;

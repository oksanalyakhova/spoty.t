import React, {FunctionComponent} from 'react';
import './latest-release.sass';
import {IoPlaySharp} from 'react-icons/io5';

interface ReleaseProps {
  id: string | number;
  src: string;
  url: string;
  year: string;
  name: string;
}

interface LatestReleaseProps {
  release: ReleaseProps;
}

const LatestRelease: FunctionComponent<LatestReleaseProps> = ({
  release
}): JSX.Element => {
  return (
    <div className="latest-release">
      <a className="latest-release__art" href={release.url}>
        <img src={release.src} alt={release.name}/>
        <IoPlaySharp/>
      </a>
      <div className="latest-release__song song">
        <a className="song__title" href={release.url}>{release.name}</a>
        <div className="song__date">{release.year}</div>
      </div>
    </div>
  )
}

export default LatestRelease;

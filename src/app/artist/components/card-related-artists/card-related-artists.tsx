import React, {FunctionComponent} from 'react';
import {IoPlaySharp} from 'react-icons/io5';
import classNames from 'classnames';

import './card-related-artists.sass';

interface CardRelatedArtistsHelpsProps {
  id: string | number;
  url: string;
  src: string;
  name: string;
}

interface CardRelatedArtistsProps {
  artist: CardRelatedArtistsHelpsProps;
  isSmall: boolean;
}

const CardRelatedArtists: FunctionComponent<CardRelatedArtistsProps> = ({
  artist,
  isSmall,
}): JSX.Element => {
  const classes = classNames('related-artist', {
    'is-small': isSmall,
    'is-large': !isSmall,
  })

  return (
    <a href={artist.url}
       className={classes}>
      <span className="related-artist__img">
        <img src={artist.src} alt={artist.name}/>
        {!isSmall &&
          <IoPlaySharp/>
        }
      </span>
      <span className="related-artist__name">
        {artist.name}
      </span>
    </a>
  )
}

export default CardRelatedArtists;


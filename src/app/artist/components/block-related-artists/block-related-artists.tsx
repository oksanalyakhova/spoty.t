import React, {FunctionComponent} from 'react';
import CardRelatedArtists from '../card-related-artists/card-related-artists';
import classNames from 'classnames';
import {IArtist} from '../../../../types/siteTypes';

import './block-related-artists.sass';

interface BlockRelatedArtistsProps {
  artists: Array<IArtist>;
  isCardSmall: boolean;
  forBlock?: boolean;
  total?: number;
}

const BlockRelatedArtists: FunctionComponent<BlockRelatedArtistsProps> = ({
  artists,
  isCardSmall,
  forBlock,
  total,
}): JSX.Element => {
  const listArtists = artists.map((artist) =>
    <CardRelatedArtists
      key={artist.id}
      artist={artist}
      isSmall={isCardSmall}
    />
  );

  const classes = classNames('related-artists', {
    'for-block': forBlock,
    'for-tab': !forBlock
  })

  return (
    <div className={classes}>
      {listArtists.splice(0, total)}
    </div>
  )
}

export default BlockRelatedArtists;

import React, {FunctionComponent} from 'react';
import CardRelatedArtists from '../card-related-artists/card-related-artists';

import './block-related-artists.sass';

interface RelatedArtistProps {
  id: string | number;
  url: string;
  src: string;
  name: string;
}

interface BlockRelatedArtistsProps {
  artists: Array<RelatedArtistProps>;
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
  return (
    <div className={`${forBlock ? "related-artists for-block" : "related-artists for-tab"}`}>
      {listArtists.splice(0, total)}
    </div>
  )
}

export default BlockRelatedArtists;

import React, {FunctionComponent} from 'react';
import BlockRelatedArtists from '../block-related-artists/block-related-artists';

import './tab-related-artists.sass';

interface RelatedArtistProps {
  id: string | number;
  url: string;
  src: string;
  name: string;
}

interface RelatedArtistsProps {
  artists: Array<RelatedArtistProps>;
  isCardArtistsSmall: boolean;
  forArtistsBlock: boolean;
}

const TabRelatedArtists: FunctionComponent<RelatedArtistsProps> = ({
  artists,
  isCardArtistsSmall,
  forArtistsBlock,
}): JSX.Element => {
  return (
    <div className="tab-related-artists">
      <BlockRelatedArtists
        artists={artists}
        isCardSmall={isCardArtistsSmall}
        forBlock={forArtistsBlock}
        total={artists.length}
      />
    </div>
  )
};

export default TabRelatedArtists;

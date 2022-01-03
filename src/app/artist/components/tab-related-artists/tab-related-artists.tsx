import React, { FunctionComponent } from 'react';
import BlockRelatedArtists from '../block-related-artists/block-related-artists';
import { IArtist } from '../../../../types/siteTypes';

import './tab-related-artists.sass';

interface RelatedArtistsProps {
  artists: Array<IArtist>;
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
  );
};

export default TabRelatedArtists;

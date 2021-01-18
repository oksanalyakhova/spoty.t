import React, { FunctionComponent } from 'react';

import './artist-view.sass';

interface ArtistProps {
    className?: string,
    isVerified? : boolean
}

const Artist: FunctionComponent<ArtistProps> = ({
    className,
    isVerified
}): JSX.Element => {
    return (
        <div className={`${className? className + " artist" : "artist"} 
        ${isVerified ? "is-verified" : ""}`}>

        </div>
    )
};

Artist.defaultProps = {
    className: ''
}

export default Artist;

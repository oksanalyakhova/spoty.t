import React, { FunctionComponent, useEffect, useState } from 'react';
import CardAlbums from '../card-albums/card-albums';
import { IoStopwatchOutline, IoThumbsUpSharp } from 'react-icons/io5';

import './block-albums.sass';
import ButtonTheme from "../../../../ui/button-theme/button-theme";
import ButtonMore from "../../../../ui/button-more/button-more";

interface CardAlbumsProps {
    id: string | number;
    title: string;
    featured?: string;
    isAdded: boolean;
    explicit: string;
    length: string;
    isTrend: boolean;
}

interface BlockAlbumsProps {
    album: {
        id: string | number;
        src: string;
        year: string;
        name: string;
    },
    tracks: Array<CardAlbumsProps>
}

const BlockAlbums: FunctionComponent<BlockAlbumsProps> = ({
    album,
    tracks,
}): JSX.Element => {
    const listTracks = tracks.map((track, index) =>
        <CardAlbums
            className="track_albums"
            key={track.id}
            track={track}
            index={index}
        />
    );

    const [width, setWidth] = useState(window.innerWidth);
    const breakpoint = 1200;
    useEffect(() => {
        window.addEventListener("resize", () => setWidth(window.innerWidth));
    }, []);

    return (
        <div className="album">
            <div className="album__info">
                <div className="album__info__art">
                    <img src={album.src} alt={album.name} />
                </div>
                <div className="album__info__meta">
                    <div className="album__year">
                        {album.year}
                    </div>
                    <div className="album__name">
                        {album.name}
                    </div>
                    <div className="album__actions">
                        <ButtonTheme
                            text="save"
                            isDisabled={false}
                            onClick={() => {
                                console.log("theme was clicked")}}
                        />
                        <ButtonMore onClick={() => {
                            console.log("more was clicked")}}
                        />
                    </div>
                </div>
            </div>
            <div className="album__tracks">
                <div className="tracks__heading">
                    <div className="tracks__heading__number">
                        #
                    </div>
                    <div className="tracks__heading__title">
                        Song
                    </div>
                    <div className="tracks__heading__length">
                        <IoStopwatchOutline />
                    </div>
                    {width > breakpoint
                        ? <div className="tracks__heading__popularity">
                            <IoThumbsUpSharp />
                          </div>
                        : null
                    }
                </div>
                <div className="tracks tracks_albums">
                    {listTracks}
                </div>
            </div>
        </div>
    )
}

export default BlockAlbums;

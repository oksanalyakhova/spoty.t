import React from 'react';
import Tag from '../../../ui/tag/tag';
import ButtonTheme from '../../../ui/button-theme/button-theme';
import ButtonPlay from "../../../ui/button-play/button-play";
import ButtonMore from "../../../ui/button-more/button-more";

const Topbar = () => (
    <div>
        <Tag text={'Tag'} />

        <br/>

        <ButtonTheme
            text={'button'}
            disable={false}
            onClick={() => {console.log('clicked')}} />

        <ButtonPlay
            text={'button'}
            active={false}
            onClick={() => {console.log('clicked')}} />

        <br/>

        <ButtonMore onClick={() => {console.log('clicked')}} />
    </div>
);

export default Topbar;

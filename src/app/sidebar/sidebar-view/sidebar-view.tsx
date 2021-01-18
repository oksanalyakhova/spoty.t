import React from 'react';
import Tag from '../../../ui/tag/tag';
import ButtonTheme from '../../../ui/button-theme/button-theme';
import ButtonPlay from '../../../ui/button-play/button-play';
import ButtonMore from '../../../ui/button-more/button-more';

const Sidebar = () => (
    <div>

        <Tag text={'Tag'} />

        <br/>

        <ButtonTheme
            text='theme'
            disable={false}
            onClick={() => {console.log('theme was clicked')}} />

        <ButtonPlay
            text='play'
            active={false}
            onClick={() => {console.log('play was clicked')}} />

        <br/>

        <ButtonMore onClick={() => {console.log('more was clicked')}} />
    </div>
);

export default Sidebar;

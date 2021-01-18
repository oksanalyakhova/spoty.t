import React, {FunctionComponent} from 'react';
import Tag from '../../../ui/tag/tag';
import ButtonTheme from '../../../ui/button-theme/button-theme';
import ButtonPlay from '../../../ui/button-play/button-play';
import ButtonMore from '../../../ui/button-more/button-more';

interface SidebarProps {
   className?: string
}

const Sidebar: FunctionComponent<SidebarProps> = ({
   className
}): JSX.Element => {
   return (
       <div className={`${className ? className + " sidebar" : "sidebar"}`}>

           <Tag text={'Tag'}/>

           <br/>

           <ButtonTheme
               text='theme'
               isDisabled={false}
               onClick={() => {
               console.log('theme was clicked')
           }}/>

           <ButtonPlay
               text='play'
               isActive={false}
               onClick={() => {
               console.log('play was clicked')
           }}/>

           <br/>

           <ButtonMore onClick={() => {
               console.log('more was clicked')
           }}/>
       </div>
   )
};

export default Sidebar;

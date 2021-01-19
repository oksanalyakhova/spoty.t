import React, {FunctionComponent} from 'react';
import Tag from '../../../ui/tag/tag';

interface SidebarProps {
   className?: string
}

const Sidebar: FunctionComponent<SidebarProps> = ({
   className
}): JSX.Element => {
   return (
       <div className={`${className ? className + " sidebar" : "sidebar"}`}>

           <Tag text={'Tag'}/>


       </div>
   )
};

export default Sidebar;

import React, { FunctionComponent } from 'react';

import './accordion.sass';

interface AccordionProps {
    className?: string
}

const Accordion: FunctionComponent<AccordionProps> = ({
    className
}): JSX.Element => {
    return (
        <div className={className? `${className} accordion` : `accordion`}>

        </div>
    )
};

export default Accordion;

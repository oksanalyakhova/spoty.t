import React, {FunctionComponent} from 'react';
import './tag.sass';

interface TagProps {
  text?: string;
}

const Tag: FunctionComponent<TagProps> = ({
  text,
}): JSX.Element => {
  return (
    <div className="tag">
      {text}
    </div>
  )
}

export default Tag;

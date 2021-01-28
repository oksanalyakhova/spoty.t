import {useEffect} from 'react';

const useOutsideClick = (ref: any, callback: () => void) => {
  const handleClick = (e: { target: any; }) => {
    if (ref.current && !ref.current.contains(e.target)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  });
};

export default useOutsideClick;

// used
// https://gist.github.com/kevinfelisilda/30d215d0cd4743d5b7949c0a287d62f5#file-useoutsideclick-js

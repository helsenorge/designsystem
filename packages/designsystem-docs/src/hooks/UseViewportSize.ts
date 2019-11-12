import {useState, useLayoutEffect} from 'react';

export default function useViewportSize() {
  if (typeof window !== `undefined`) {
    const [width, setWidth] = useState(Math.max(window.document.documentElement.clientWidth, window.innerWidth || 0));
    // const [height, setHeight] = useState(Math.max(document.documentElement.clientHeight, window.innerHeight || 0));
    function setWindowSize(e: any) {
      setWidth(Math.max(window.document.documentElement.clientHeight, window.innerWidth || 0));
      // setHeight(Math.max(document.documentElement.clientHeight, window.innerHeight || 0))
    }
    useLayoutEffect(() => {
      window.addEventListener('resize', setWindowSize, true);
      return () => {
        window.removeEventListener('resize', setWindowSize, true);
      };
    }, []);
    return width;
  }
}

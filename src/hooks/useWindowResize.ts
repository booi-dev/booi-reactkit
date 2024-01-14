import { useEffect, useState } from "react";

function useWindowResize(throttleDelay = 200) {
  const [windowSize, setWindowSize] = useState({
    width: 600,
    height: 600,
  });

  useEffect(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, []);

  useEffect(() => {
    let timeoutId: number;

    function handleResize() {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }, throttleDelay);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [throttleDelay]);

  return windowSize;
}

export default useWindowResize;

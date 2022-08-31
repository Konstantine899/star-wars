import React, { useEffect, useRef } from "react";

export const useInterval = (callback: any, delay: number) => {
  const savedCallback: React.MutableRefObject<any> = useRef();
  //кеширую callback
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
};

import { RefObject, useEffect } from "react";

type UseClickOutsideProps = {
  ref: RefObject<HTMLElement>;
  callback: () => void;
};

const useClickOutside = (props: UseClickOutsideProps): void => {
  const { ref, callback } = props;

  const handleClick = (e: MouseEvent): void => {
    if (ref.current && !ref.current.contains(e.target as Node)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [ref, callback]);
};

export default useClickOutside;

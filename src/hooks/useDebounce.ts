import { useEffect, useState } from "react";

export const useDebounceSearch = (value: string, delay = 300) => {
  const [debounced, setDebounce] = useState(value);

  useEffect(() => {
    const t = setTimeout(() => {
      setDebounce(value);
    }, delay);

    return () => clearTimeout(t);
  }, [value, delay]);

  return debounced;
};

import { useEffect, useState } from "react";

export const useMediaQuery = (mediaQuery: string): boolean => {
  const match = window.matchMedia(mediaQuery);
  const [matches, setMatches] = useState(match.matches);

  useEffect(() => {
    const listener = (e) => {
      setMatches(e.matches);
    };
    
    match.addEventListener("change", listener);
    return () => match.removeEventListener("change", listener);
  }, [matches]);

  return matches;
};

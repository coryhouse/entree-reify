import { useEffect, useState } from "react";

export function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    // Return a function. React calls the function returned from useEffect when the component unmounts.
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return width;
}

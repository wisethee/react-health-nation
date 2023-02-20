import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  const oldPage = useRef(pathname);

  useEffect(() => {
    if (pathname !== oldPage.current) {
      try {
        window.scroll({
          top: 0,
          left: 0,
          behavior: "instant",
        });
      } catch (error) {
        window.scrollTo(0, 0);
      }
      oldPage.current = pathname;
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;

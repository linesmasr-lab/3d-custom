import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Start every new page at the top (React Router keeps the old scroll position).
function ScrollToTop() {
  const { pathname } = useLocation();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default ScrollToTop;

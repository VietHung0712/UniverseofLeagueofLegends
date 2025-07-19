import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

let lastPath = "";

function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        if (pathname === lastPath) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            lastPath = pathname;
            window.scrollTo({ top: 0, behavior: 'instant' });
        }
    });

    return null;
}

export default ScrollToTop;
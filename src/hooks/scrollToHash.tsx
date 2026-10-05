import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToHash(){
    const { hash } = useLocation();

    useEffect(()=>{
        if (!hash) {    // if the page has no hash, scroll to  top instead
            window.scrollTo({ top: 0, behavior: "smooth" })
            return;
        }
        setTimeout(() => {
            const el = document.querySelector(hash)
            if (!el) return;
            const NAVBAR_OFFSET = 66; // height of navbar

            const rect = el.getBoundingClientRect();
            const scrollTop = window.pageYOffset + rect.top;

            window.scrollTo({
                top: scrollTop - NAVBAR_OFFSET,
                behavior: "smooth"
            });
        }, 10);
    }, [hash]);
    return null;
}
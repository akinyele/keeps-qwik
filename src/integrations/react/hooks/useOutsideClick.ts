/** @jsxImportSource react */

import { RefObject, useEffect } from "react";

/**
 * Hook that alerts clicks outside the passed ref
 */
function useOutsideClick(ref: RefObject<HTMLDivElement>, onOutsideClick: () => void ) {
    useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside(event: Event) {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                onOutsideClick();
            }
        }
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
}

export default useOutsideClick
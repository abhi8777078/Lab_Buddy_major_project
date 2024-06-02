import React, { useEffect, useRef } from 'react';
import StudentSidebar from './StudentSidebar';
import StudentTopbar from './StudentTopbar';

const Compiler = () => {
    const embedContainerRef = useRef(null);

    useEffect(() => {
        // Create the JDoodle script
        const script = document.createElement('script');
        script.src = 'https://www.jdoodle.com/assets/jdoodle-pym.min.js';
        script.type = 'text/javascript';
        script.async = true;

        // Append the script to the embed container
        embedContainerRef.current.appendChild(script);

        return () => {
            // Cleanup on unmount
            // embedContainerRef.current.innerHTML = '';
            
        };
    }, []);

    return (
        <>
            <StudentTopbar/>
            <StudentSidebar/>
            <div className='ml-72 mt-16 '>
                {/* Container for the JDoodle embed */}
                <div ref={embedContainerRef} data-pym-src="https://www.jdoodle.com/embed/v1/6ba97fd66069ade7"></div>
            </div>
        </>
    );
};

export default Compiler;
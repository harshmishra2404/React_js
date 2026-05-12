import React, { useEffect, useState } from 'react'

const ResizeWindow = () => {


    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        console.log("Event Listener added");
        window.addEventListener('resize', handleResize);

        return () => {
            console.log("Event Listener Removed");
            window.removeEventListener('resize', handleResize);
        };
    }, []);



    return (
        <div>
            <h1>Resize Window</h1>
            <h1>Window width :- {windowWidth}px</h1>
        </div>
    )
}

export default ResizeWindow
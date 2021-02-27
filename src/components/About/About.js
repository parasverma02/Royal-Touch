import React, { useEffect } from 'react';

const About = props => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <h1>This is About</h1>
    )
}

export default About;
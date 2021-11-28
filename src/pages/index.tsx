import * as React from 'react';
import planetEarth from '../images/earth_dscovr_apr19_transparent.png';

// markup
const IndexPage = () => {
    return (
        <>
            <h1>Sistema Solar</h1>
            <img src={planetEarth} alt="Planeta Tierra" />
        </>
    );
};

export default IndexPage;

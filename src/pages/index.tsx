import * as React from 'react';
import planetEarth from '../images/earth_dscovr_apr19_transparent.png';

// markup
const IndexPage = () => {
    return (
        <>
            <h1>Sistema Solar</h1>
            <h2>Tierra</h2>
            <h3>Gravedad</h3>
            <p>9.8</p>
            <h3>Densidad</h3>
            <p>5.5136</p>
            <img src={planetEarth} alt="Planeta Tierra" />
        </>
    );
};

export default IndexPage;

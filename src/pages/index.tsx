import * as React from 'react';

import '../styles/reset.css';
import '../styles/index.css';

import planetEarth from '../images/earth_dscovr_apr19_transparent.png';

// markup
const IndexPage = () => {
  return (
    <main>
      <h1 className="home-tile">Sistema Solar</h1>
      <div className="planet-info-wrapper">
        <h2 className="planet-tile">Tierra</h2>
        <div className="planet-data-container">
          <div className="planet-data-wrapper">
            <h3 className="planet-data-name">Gravedad</h3>
            <p className="planet-data-value">
              9.8 <span className="planet-data-unity">m/s</span>
            </p>
          </div>
          <div className="planet-data-wrapper">
            <h3 className="planet-data-name">Densidad</h3>
            <p className="planet-data-value">
              5.5136{' '}
              <span className="planet-data-unity">
                g/cm<sup>3</sup>
              </span>
            </p>
          </div>
        </div>
      </div>

      <img src={planetEarth} alt="Planeta Tierra" />
    </main>
  );
};

export default IndexPage;

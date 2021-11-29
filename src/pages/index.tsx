import * as React from 'react';

import '../styles/reset.css';
import '../styles/index.css';
import mocks from '../mocks';
import planetEarth from '../images/earth_dscovr_apr19_transparent.png';

if (process.env.NODE_ENV === 'development') {
  const { worker } = require('../mocks/browser');
  worker.start();
}
// markup
const IndexPage = () => {
  return (
    <main>
      <h1 className="home-tile">Sistema Solar</h1>
      <ul>
        <li>
          <a href="#Mercurio">Mercurio</a>
        </li>
        <li>
          <a href="#Venus">Venus</a>
        </li>
        <li>
          <a href="#Tierra">Tierra</a>
        </li>
        <li>
          <a href="#Marte">Marte</a>
        </li>
        <li>
          <a href="#Jupiter">Jupiter</a>
        </li>
        <li>
          <a href="#Saturno">Saturno</a>
        </li>
        <li>
          <a href="#Urano">Urano</a>
        </li>
      </ul>
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

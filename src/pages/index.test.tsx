import React from 'react';
import { render, screen } from '@testing-library/react';

import IndexPage from './index';

describe('Al acceder a Sistema Solar se ve', () => {
    it('una foto del planeta Tierra', () => {
        const nameOfPlanet = 'Planeta Tierra';
        render(<IndexPage />);

        screen.getByRole('img', { name: nameOfPlanet });
    });
});

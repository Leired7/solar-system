import React from 'react';
import { render, screen } from '@testing-library/react';

import IndexPage from './index';

describe('Al acceder a Sistema Solar se ve', () => {
    it('una foto del planeta Tierra', () => {
        const nameOfPlanet = 'Planeta Tierra';
        render(<IndexPage />);

        screen.getByRole('img', { name: nameOfPlanet });
    });

    it('un texto con el nombre del planeta', () => {
        const nameOfPlanet = 'Tierra';

        render(<IndexPage />);
        screen.getByRole('heading', { name: nameOfPlanet });
    });

    it('los siguientes datos de la Tierra: densidad', () => {
        const density = 'Densidad';
        const densityValue = 5.5136;
        render(<IndexPage />);

        screen.getByRole('heading', { name: density });
        screen.getByText(densityValue);
    });

    it('los siguientes datos de la Tierra: gravedad', () => {
        const gravity = 'Gravedad';
        const gravityValue = 9.8;
        render(<IndexPage />);

        screen.getByRole('heading', { name: gravity });
        screen.getByText(gravityValue);
    });
});

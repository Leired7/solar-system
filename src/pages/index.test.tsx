import { render, screen } from '@testing-library/react';
import IndexPage from '.';

describe('render', () => {
  render(<IndexPage />);
  screen.getByText('hola');
});

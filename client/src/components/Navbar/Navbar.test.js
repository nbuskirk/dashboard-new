import * as React from 'react';

/* Testing Modules */
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';

/* Components */
import Navbar from './Navbar';

jest.mock('../AuthProvider/AuthProvider', () => ({
  useAuth: () => ({
    logout: jest.fn(),
  }),
}));

test('it renders the navbar and links', async () => {
  render(
    <Router>
      <Navbar />
    </Router>
  );
  expect(screen.getByText(`Dashboard`)).toBeInTheDocument();
  expect(screen.getByText(`Logout`)).toBeInTheDocument();
});

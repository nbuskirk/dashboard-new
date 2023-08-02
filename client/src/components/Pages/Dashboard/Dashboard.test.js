/* React Modules */
import * as React from 'react';

/* Testing Modules */
import '@testing-library/jest-dom';
import { render, screen, prettyDOM, renderHook } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';

/* Components */
import Dashboard from './Dashboard';
import { useStore } from '../../../hooks/useStore';

const testUser = {
  name: 'test',
};

jest.mock('../../AuthProvider/AuthProvider', () => ({
  useAuth: () => ({
    logout: jest.fn(),
  }),
}));

test('it renders the dashboard with welcome message', async () => {
  const setUser = renderHook(() => useStore((state) => state.setUser)).result
    .current;
  setUser(testUser.name);
  render(
    <Router>
      <Dashboard />
    </Router>
  );
  expect(screen.getByText(`Hello, test`)).toBeInTheDocument();
});

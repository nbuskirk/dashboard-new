import * as React from 'react';

/* Testing Modules */
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';

/* Components */
import Home from './Home';

test('it redirects to the dashboard', async () => {
  render(
    <Router>
      <Home />
    </Router>
  );
  expect(window.location.pathname).toEqual('/');
});

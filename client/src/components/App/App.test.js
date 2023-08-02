import * as React from 'react';

/* Testing Modules */
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

/* Components */
import App from './App';

test('it renders the app without crashing', async () => {
  render(<App />);
  expect(global.window.location.pathname).toContain('/login');
});

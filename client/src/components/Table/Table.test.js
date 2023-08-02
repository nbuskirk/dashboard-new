import * as React from 'react';

/* Testing Modules */
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

/* Components */
import Table from './Table';

test('it renders a table', async () => {
  render(<Table />);
  expect(screen.getByText(`Status`)).toBeInTheDocument();
});

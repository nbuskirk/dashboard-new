import * as React from 'react';

/* Testing Modules */
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

/* Components */
import Login from './Login';

const mockUser = {
  'name': 'test',
};

jest.mock('../../../hooks/useStore', () => ({
  setUser: () => ({
    user: mockUser.name,
  }),
}));

jest.mock('../../AuthProvider/AuthProvider', () => ({
  useAuth: () => ({
    login: jest.fn(),
    logout: jest.fn(),
  }),
}));

test('shows the login form', async () => {
  render(<Login />);
  expect(screen.queryByText('Login Form')).toBeInTheDocument();
});

/* test('clicking submit sets localstorage', async() => {
  const onSubmit = jest.fn();
  render(<Login />);
  userEvent.click(screen.getByText('submit'))
  expect(setUser).toHaveBeenCalled();
}); */

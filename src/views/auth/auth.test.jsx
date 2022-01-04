import React from 'react';
import { render, screen } from '@testing-library/react';
import Login from './Auth';
import { UserProvider } from '../../context/UserContext';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

it('should render the Login component', async () => {
  const history = createMemoryHistory();
  history.push('/');

  const { container } = render(
    <UserProvider>
      <Router history={history}>
        <Login />
      </Router>
    </UserProvider>
  );

  screen.getByText('User Name');
  screen.getByText('Password');
  screen.getByRole('button', { name: 'Submit' });
  expect(container).toMatchSnapshot();
});

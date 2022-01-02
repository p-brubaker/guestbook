import { render, screen } from '@testing-library/react';
import Header from './Header';
import React from 'react';
import { UserProvider } from '../../context/UserContext';

it('should render the header component', async () => {
  const { container } = render(
    <UserProvider>
      <Header />
    </UserProvider>
  );

  screen.getByText('Sign in Friend!');

  expect(container).toMatchSnapshot();
});

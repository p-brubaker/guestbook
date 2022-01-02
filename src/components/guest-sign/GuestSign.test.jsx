import { render, screen } from '@testing-library/react';
import GuestSign from './GuestSign';
import React from 'react';
import { UserProvider } from '../../context/UserContext';

it('should render the GuestSign component', async () => {
  const { container } = render(
    <UserProvider>
      <GuestSign />
    </UserProvider>
  );

  screen.getByText('Please Sign the Guestbook!');
  expect(container).toMatchSnapshot();
});

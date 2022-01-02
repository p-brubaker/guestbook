import { render } from '@testing-library/react';
import Entries from './Entries';
import React from 'react';

const mockGuests = [
  {
    id: 1,
    name: 'Blob',
    entry: 'Hi!',
  },
];

it('should render the Entries component', async () => {
  const { container } = render(<Entries guests={mockGuests} />);

  expect(container).toMatchSnapshot();
});

import { render } from '@testing-library/react';
import React from 'react';
import { HelloWorld } from './HelloWorld';

test('should render component', () => {
  const { queryByTestId } = render(<HelloWorld />);

  expect(queryByTestId('example')).toHaveTextContent('Hello World!');
});

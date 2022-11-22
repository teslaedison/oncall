import React from 'react';

import { render } from '@testing-library/react';

import QRCode from './';

describe('QRCode', () => {
  test('it renders properly', () => {
    const component = render(<QRCode value="helloooo" />);
    expect(component.container).toMatchSnapshot();
  });
});

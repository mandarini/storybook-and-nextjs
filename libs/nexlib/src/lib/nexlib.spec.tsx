import { render } from '@testing-library/react';

import Nexlib from './nexlib';

describe('Nexlib', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Nexlib />);
    expect(baseElement).toBeTruthy();
  });
});

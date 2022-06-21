import { render } from '@testing-library/react';

import Reliib from './reliib';

describe('Reliib', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Reliib />);
    expect(baseElement).toBeTruthy();
  });
});

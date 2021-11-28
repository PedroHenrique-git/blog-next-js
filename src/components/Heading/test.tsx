import { render, screen } from '@testing-library/react';
import Heading from '.';

describe('<Heading />', () => {
  it('should render a rendering', () => {
    render(<Heading>Oi</Heading>);
    const element = screen.getByRole('heading', { name: /oi/i });
    expect(element).toBeInTheDocument();
    expect(element).toHaveStyle('font-size: 1.4rem');
  });
});

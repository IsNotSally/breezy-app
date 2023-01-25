import HomePage from '@/pages/page';
import { render, screen } from '@testing-library/react';

describe('HomePage', () => {
  it('should renders the landing page', () => {
    render(<HomePage />);

    const heading = screen.getByText(/welcome to next\.js!/i);

    expect(heading).toBeInTheDocument();
  });
});

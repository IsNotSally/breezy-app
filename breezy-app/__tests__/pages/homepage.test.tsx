import HomePage from '@/pages/page';
import { render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';


describe('HomePage', () => {
  it('should renders the landing page', () => {
    render(<HomePage />);

    const heading = screen.getByText('Freelancer login');

    expect(heading).toBeInTheDocument()
  });
});

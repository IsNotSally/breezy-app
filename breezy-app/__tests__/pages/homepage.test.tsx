import HomePage from '@/pages/page';
import React from 'react'
import { useRouter } from 'next/navigation';
import { render, screen } from '@testing-library/react';

jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      route: "/",
      push: jest.fn(),
    }
  }
}));

describe('HomePage', () => {
  it('should render the landing page', () => {
    render(<HomePage />);
    const text = screen.getByText('Freelancer Login')
    expect(text).toBeInTheDocument()
  })
});


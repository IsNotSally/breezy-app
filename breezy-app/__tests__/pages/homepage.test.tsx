import HomePage from '@/pages/page';
import React from 'react';
import { render, screen } from '@testing-library/react';

jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      route: '/',
      push: jest.fn(),
    };
  },
}));

describe('HomePage', () => {
  it('should render Free Lance login in the landing page', () => {
    render(<HomePage />);
    const freeLancetext = screen.getByText('Freelancer Login');
    expect(freeLancetext).toBeInTheDocument();
  });
  it('should render Pay Invoice in the landing page', () => {
    render(<HomePage />);
    const payInvoicetext = screen.getByText('Pay An Invoice');
    expect(payInvoicetext).toBeInTheDocument();
  });
});

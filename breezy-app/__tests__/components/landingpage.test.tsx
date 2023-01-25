import React from 'react';
import {
  render,
  fireEvent,
  waitFor,
  screen,
  queryByPlaceholderText,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import LandingPage from '@/components/landing-page';

jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      route: '/',
      push: jest.fn(),
    };
  },
}));

describe('LandingPage', () => {
  it('should show input form when Pay Invoice link click', async () => {
    render(<LandingPage />);

    fireEvent.click(screen.getByRole('button'));

    const input = await waitFor(() =>
      screen.getByPlaceholderText('Insert PO number')
    );

    expect(input).toBeInTheDocument();
  });
});

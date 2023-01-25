import HomePage from '@/pages/page';
import React from 'react';
import { act, render, screen } from '@testing-library/react';
import MembersOnly from '@/pages/members-only/page';
import { UserProvider } from '@auth0/nextjs-auth0/client';

jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      route: '/',
      push: jest.fn(),
    };
  },
}));

describe('HomePage', () => {
  it('should render sidebar in the homepage', async () => {
    act(() => {
      render(
        // <UserProvider>
        <MembersOnly />
        // </UserProvider>
      );
    });
    const addInvoice = await waitFor(() => screen.getByText('Create Invoice'));
    expect(addInvoice).toBeInTheDocument();
  });
});

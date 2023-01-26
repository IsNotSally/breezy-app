import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';
import InvoiceForm from '@/components/invoice-form';

const mockClient = {
  clientId: '1',
  clientFullName: '',
  clientAddress: '',
  clientPhoneNumber: "",
  clientEmail: ""
}

describe('invoice-form', () => {
  it('should render the form correctly', () => {
    render(<InvoiceForm />);
    const heading = screen.getByText('Client Details');
    expect(heading).toBeInTheDocument();
  });
  it('should render the create invoice button correctly', () => {
    render(<InvoiceForm />);
    const btn = screen.getByText('CREATE INVOICE');
    expect(btn).toBeInTheDocument();
  });
  // it('should empty form when create invoice button is clicked', () => {
  //   render(<InvoiceForm existingClient={mockClient} />);
  //   const btn = screen.getByText('CREATE INVOICE');
  //   fireEvent.click(btn)
  //   const placeholder = screen.getByPlaceholderText('Insert purchase order number...');
  //   expect(placeholder).toBeInTheDocument();
  // });
});

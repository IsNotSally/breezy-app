import { render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';
import DisplayClients from '@/components/displayClients';

const mockClient = {
  _id: "63cea7db5fb110299846d7ca",
  clientFullName: 'WANG ZIYANG',
  clientAddress: 'carrer de huelva 83',
  clientPhoneNumber: '',
  clientEmail: 'verena0915@gmail.com',
  invoices: [],
}

describe('display Clients', () => {
  it('should render the clients list', () => {
    render(<DisplayClients clientData={mockClient}/>);
    const email = screen.getByText('verena0915@gmail.com');
    expect(email).toBeInTheDocument();
  });

});
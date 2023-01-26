import { render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';
import DisplayInvoiceList from '@/components/displayInvoiceList';
import IInvoice from 'interfaces/invoice';
import { getInvoices } from 'service/invoice.service';

const mockResponse: IInvoice[] = [{
  _id: "63cea7db5fb110299846d7cc",
  client: 
  {
    _id: "63cea7db5fb110299846d7ca",
    clientFullName: 'WANG ZIYANG',
    clientAddress: 'carrer de huelva 83',
    clientPhoneNumber: '',
    clientEmail: 'verena0915@gmail.com',
    invoices: [],
  },
  fullName: 'WANG ZIYANG',
  address: '',
  phoneNumber: '',
  email: 'verena0915@gmail.com',
  clientFullName: 'WANG ZIYANG',
  clientAddress: 'carrer de huelva 83',
  clientPhoneNumber: '',
  description: "",
  purchaseOrderNumber: "1234211",
  paid: false,
  date: "",
  rate: 0,
  clientEmail: "verena0915@gmail.com",
}]


describe('displayInvoiceList', () => {
  it('should render the invoice filter buttons', () => {
    render(<DisplayInvoiceList invoices={mockResponse}/>);
    const paid = screen.getByText('PAID');
    const outstanding = screen.getByText('OUTSTANDING');
    expect(paid).toBeInTheDocument();
    expect(outstanding).toBeInTheDocument();
  });

  it('should render the invoice table', async () => {
    render(<DisplayInvoiceList invoices={mockResponse} />);
    const tableHeader = screen.getByText('Invoice');
    expect(tableHeader).toBeInTheDocument();
    expect(screen.getByText('#1234211')).toBeInTheDocument();
  });
  // it('should fetch data', async () => {
  //   render(<DisplayInvoiceList invoices={mockResponse} />);
  //   const response = await getInvoices()
  //   expect(response).toEqual(mockResponse)
  // });

});

import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';
import FetchInvoice from '@/pages/pay-invoice/[id]/page';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';
import ClientViewInvoice from '@/components/client-view-invoice';


const MockInvoice = {
  _id: "63d26f1e6b96f263a7c5eb74",
  client:
  {
    _id: "63d26f1e6b96f263a7c5eb71",
    clientFullName: 'sally wang',
    clientAddress: 'Carrer de huelva 83',
    clientPhoneNumber: '605248338',
    clientEmail: 'verena0915@gmail.com',
    invoices: [],
  },
  fullName: '',
  address: '',
  phoneNumber: '',
  email: 'verena0915@gmail.com',
  clientFullName: 'sally wang',
  clientAddress: 'Carrer de huelva 83',
  clientPhoneNumber: '605248338',
  description: "code test",
  purchaseOrderNumber: "1234",
  paid: false,
  date: "2023-01-26T13:10",
  rate: 1000,
  clientEmail: "verena0915@gmail.com"
}
function GetDate(date: number) {
  let fullDate = new Date(date);

  let month = fullDate.toLocaleString([], {
    month: 'numeric',
  });
  let day = fullDate.toLocaleString([], {
    day: 'numeric',
  });

  let year = fullDate.toLocaleString([], {
    year: 'numeric',
  });

  if (Number(month) < 10) {
    month = `0${month}`;
  }
  if (Number(day) < 10) {
    day = `0${day}`;
  }

  const formatedDate = `${day}/${month}/${year}`;

  return formatedDate;
}
const amount = `£${1 * MockInvoice.rate}`;
  const currentDate = GetDate(Date.now());
  const dueDate = GetDate(MockInvoice.date);


// const params: Params = {id: MockInvoice._id}

describe('client view invoice page', () => {
  it('should render the invoice correctly', () => {
    render(<ClientViewInvoice  invoice={MockInvoice}
      amount={amount}
      currentDate={currentDate}
      dueDate={dueDate}/>);
    const date = screen.getByText('Date:');
    expect(date).toBeInTheDocument();
  });

});

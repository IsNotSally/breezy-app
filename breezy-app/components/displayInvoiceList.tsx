'use client';

import '../components/displayInvoiceList.css';
import React from 'react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import IInvoice from '../interfaces/invoice';

function DisplayInvoiceList({ invoices }: { invoices: IInvoice[] }) {
  const [isPaid, setPaidStatus] = useState<IInvoice[]>([]);
  const [paidRender, setPaidRender] = useState(false);

  function findPaid() {
    let paid = invoices.filter((invoice) => invoice.paid === true);
    setPaidStatus(paid);
    setPaidRender(true);
  }
  function findUnpaid() {
    let unPaid = invoices.filter((invoice) => invoice.paid === false);
    setPaidStatus(unPaid);
    setPaidRender(true);
  }

  function allInvoices() {
    setPaidRender(false);
  }

  console.log(invoices);

  function GetDate(datemilli: string) {
    let date = new Date(datemilli);

    let month = date.toLocaleString([], {
      month: 'short',
    });
    let day = date.toLocaleString([], {
      day: 'numeric',
    });

    let year = date.toLocaleString([], {
      year: 'numeric',
    });

    if (Number(month) < 10) {
      month = `0${month}`;
    }
    if (Number(day) < 10) {
      day = `0${day}`;
    }

    const formatedDate = `${month} ${day}, ${year}`;
    return formatedDate;
  }

  return (
    <>
      <ChakraProvider>
        <div className='filter-buttons'>
          <button onClick={findUnpaid}>OUTSTANDING </button>
          <button onClick={findPaid}>PAID</button>
          <button onClick={allInvoices}>ALL INVOICES</button>
        </div>

        <table className='GeneratedTable'>
          <thead>
            <tr>
              <th>Invoice</th>
              <th>Client</th>
              <th>Due Date</th>
              <th>Due</th>
            </tr>
          </thead>

          {!paidRender ? (
            <tbody>
              {invoices.map((invoice) => (
                <tr key={invoice._id.toString()}>
                  <td>
                    <Link href={`/members-only/invoice/${invoice._id}`}>
                      #{invoice.purchaseOrderNumber}
                    </Link>
                  </td>
                  <td>{invoice.clientFullName}</td>
                  <td>{GetDate(invoice.date)}</td>
                  <td>£{invoice.rate}</td>
                </tr>
              ))}
            </tbody>
          ) : (
            <tbody>
              {isPaid.map((invoice) => (
                <tr key={invoice._id.toString()}>
                  <td>
                    <Link href={`/members-only/invoice/${invoice._id}`}>
                      {`#${invoice.purchaseOrderNumber}`}
                    </Link>
                  </td>
                  <td>{invoice.clientFullName}</td>
                  <td>{GetDate(invoice.date)}</td>
                  <td>£{invoice.rate}</td>
                </tr>
              ))}
            </tbody>
          )}
        </table>
      </ChakraProvider>
    </>
  );
}

export default DisplayInvoiceList;

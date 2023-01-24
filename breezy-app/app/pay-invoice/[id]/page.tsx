import { getInvoiceDataById } from '../../../utils/dataFetch';
import React from 'react';
import ClientViewInvoice from '../../../components/client-view-invoice';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';

export default async function FetchInvoice({ params }: { params: Params }) {
  const id = params.id;
  const invoice = await getInvoiceDataById(id);

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

  const amount = `£${invoice.quantity * invoice.rate}`;
  const currentDate = GetDate(Date.now());
  const dueDate = GetDate(invoice.date);

  return (
    <>
      <ClientViewInvoice
        invoice={invoice}
        amount={amount}
        currentDate={currentDate}
        dueDate={dueDate}
      />
    </>
  );
}

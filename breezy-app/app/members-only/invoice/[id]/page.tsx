// import DisplayInvoice from '../../../../components/displayInvoice';
import '../../../../components/displayInvoice.css';
import React from 'react';
import Logo from '../../../../public/For Web/png/Black logo - no background.png';
import Image from 'next/image';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';
import IInvoice from '../../../../interfaces/invoice';
import { getInvoiceById } from '../../../../service/invoice.service';

//this params is from the route(the folder name--invoice/[id])
export default async function FetchInvoice({ params }: { params: Params }) {
  const id = params.id;
  const data: IInvoice = await getInvoiceById(id);

  const myinvoice = data;

  function GetDate(date: any) {
    date = new Date(date);

    let month = date.toLocaleString([], {
      month: 'numeric',
    });
    let day = date.toLocaleString([], {
      day: 'numeric',
    });

    let year = date.toLocaleString([], {
      year: 'numeric',
    });

    if (month < 10) {
      month = `0${month}`;
    }
    if (day < 10) {
      day = `0${day}`;
    }

    const formatedDate = `${day}/${month}/${year}`;
    return formatedDate;
  }

  const currentDate = GetDate(Date.now());

  const dueDate = GetDate(myinvoice.date);

  return (
    <>
      <div className="invoice-box">
        <table cellPadding="0" cellSpacing="0">
          <tr className="top">
            <td colSpan={3}>
              <table>
                <tr>
                  <td className="title">
                    <Image src={Logo} width={150} alt="logo"></Image>
                  </td>

                  <td>
                    INVOICE #1
                    <br />
                    <br />
                    <strong>PO Number:#{myinvoice.purchaseOrderNumber}</strong>
                    <br />
                    <strong>Date:</strong> {currentDate}
                    <br />
                    <strong>Due:</strong>{' '}
                    {dueDate === currentDate ? 'On Receipt' : dueDate}
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <tr className="information">
            <td colSpan={2}>
              <table>
                <tr>
                  <td>
                    {myinvoice.fullName}
                    <br />
                    {myinvoice.address}
                    <br />
                    {myinvoice.email}
                  </td>

                  <td>
                    <strong>Bill To</strong>
                    <br />
                    {myinvoice.clientFullName}
                    <br />
                    {myinvoice.clientAddress}
                    <br />
                    {myinvoice.clientEmail}
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <tr className="heading">
            <td>Item</td>
            <td>Price</td>
          </tr>

          <tr className="item">
            <td>{myinvoice.description}</td>

            <td>£{myinvoice.rate}</td>
          </tr>

          <tr className="total">
            <td></td>

            <td>Total: £{myinvoice.rate}</td>
          </tr>
        </table>
      </div>
    </>
  );
}

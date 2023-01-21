
// import DisplayInvoice from '../../../../components/displayInvoice';
import '../../../../components/displayInvoice.css'
import React from 'react';
import Logo from '../../../../public/For Web/png/Black logo - no background.png';
import Image from 'next/image';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';
import { getDataById } from '../../../../utils/dataFetch';
import { IInvoice } from '../../../../models/invoice';

//this params is from the route(the folder name--invoice/[id])
export default async function FetchInvoice({ params } : {params: Params}) {
  const id = params.id;
  console.log(id);
  
  const data: IInvoice  = await getDataById(id);
  const invoice = data;

  function GetDate(date:any) {
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
  const dueDate = GetDate(invoice.date);
  

  return (
    <>
      <div className='invoice-box'>
        <table cellPadding='0' cellSpacing='0'>
          <tr className='top'>
            <td colSpan={3}>
              <table>
                <tr>
                  <td className='title'>
                    <Image src={Logo} width={150} alt='logo'></Image>
                  </td>

                  <td>
                    INVOICE #1
                    <br />
                    <br/>
                    <strong>PO Number:#{invoice.purchaseOrderNumber}</strong>
                    <br/>
                    <strong>Date:</strong> {currentDate}
                    <br />
                    <strong>Due:</strong> {dueDate === currentDate ? 'On Receipt' : dueDate}
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <tr className='information'>
            <td colSpan={2}>
              <table>
                <tr> 
                  <td>
                    {invoice.fullName}
                    <br />
                    {invoice.address}
                    <br />
                    {invoice.email}
                  </td>

                  <td>
                    <strong>Bill To</strong>
                    <br/>
                    {invoice.clientFullName}
                    <br />
                    {invoice.clientAddress}
                    <br />
                    {invoice.clientEmail}
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <tr className='heading'>
            <td>Item</td>
            <td>Price</td>
          </tr>

          <tr className='item'>
            <td>{invoice.description}</td>

            <td>£{invoice.rate}</td>
          </tr>

          <tr className='total'>
            <td></td>

            <td>Total: £{invoice.rate}</td>
          </tr>
        </table>
      </div>
    </>
  );
}



import '../../../../components/displayInvoice.css';
import React from 'react';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';
import {
  getClientById,
  getClientInvoices,
} from '../../../../service/client.service';
import IClient from '../../../../interfaces/clients';
import DisplayInvoiceList from '../../../../components/displayInvoiceList';
import Link from 'next/link';

//this params is from the route(the folder name--invoice/[id])
export default async function FetchInvoice({ params }: { params: Params }) {
  const id = params.id;
  const data: IClient = await getClientById(id);

  const myclient = data;

  const invoices = await getClientInvoices(myclient._id);

  return (
    <>
      <div className="client-box">
        <h2>Client details</h2>

        <div className="myflex">
          <div>Name :</div>
          <div>{myclient.clientFullName}</div>
        </div>

        <div className="myflex">
          <div>Phone Number :</div>
          <div>{myclient.clientPhoneNumber}</div>
        </div>

        <div className="myflex">
          <div>Email address :</div>
          <div>{myclient.clientEmail}</div>
        </div>

        <div className="myflex">
          <div>Address :</div>
          <div>{myclient.clientAddress}</div>
        </div>

        <Link
          href={`/members-only/clients/${myclient._id}/create-client-invoice`}
        >
          <h2>Create Invoice</h2>
        </Link>
        <DisplayInvoiceList invoices={invoices} />
      </div>
    </>
  );
}

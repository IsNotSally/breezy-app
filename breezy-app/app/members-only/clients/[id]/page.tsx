
// import DisplayInvoice from '../../../../components/displayInvoice';
import '../../../../components/displayInvoice.css'
import React from 'react';
import Logo from '../../../../public/For Web/png/Black logo - no background.png';
import Image from 'next/image';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';
import { getClientDataById, getDataById, getInvoiceDataByUserId } from '../../../../utils/dataFetch';
import IInvoice from '../../../../interfaces/invoice'; 
import IClient from '../../../../interfaces/clients';
import DisplayInvoiceList from '../../../../components/displayInvoiceList';

//this params is from the route(the folder name--invoice/[id])
export default async function FetchInvoice({ params } : {params: Params}) {
  const id = params.id;
  const data: IClient  = await getClientDataById(id);
  const myclient = data;
  
  const invoices = await getInvoiceDataByUserId(myclient._id);

  return (
    <>
      <div className='client-box'>
      <h2>Client details</h2>
      <form className="form form-user-data">
          <div className="form__group">
            <label className="form__label" htmlFor="name">
              Name
            </label>
            <input
              className="form__input"
              id="name"
              type="text"
              value={myclient.clientFullName}
              required
              name="name"
            />
          </div>
          <div className="form__group">
            <label className="form__label" htmlFor="name">
              Phone Number
            </label>
            <input
              className="form__input"
              id="name"
              type="text"
              value={myclient.clientPhoneNumber}
              required
              name="name"
            />
          </div>
          <div className="form__group">
            <label className="form__label" htmlFor="email">
              Email address
            </label>
            <input
              className="form__input"
              id="email"
              type="email"
              value={myclient.clientEmail}
              required
              name="email"
            />
          </div>

          <div className="form__group">
            <label className="form__label" htmlFor="name">
              Address
            </label>
            <input
              className="form__input"
              id="name"
              type="text"
              value={myclient.clientAddress}
              required
              name="name"
            />
          </div>
        </form>
        <h2>Invoices list: </h2>
        <DisplayInvoiceList invoices={invoices} />
      </div>
    </>
  );
}



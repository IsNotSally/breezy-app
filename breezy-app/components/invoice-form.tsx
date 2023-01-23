'use client';

import { useState } from 'react';
import '../components/invoice-form.css';
import { createClient, submitData } from '../utils/dataFetch';
import Link from 'next/link';
import React from 'react';
import {
  FormControl,
  FormLabel,
  ChakraProvider,
  Input,
} from '@chakra-ui/react';
import IInvoice from '../interfaces/invoice';
import IClient from '../interfaces/clients';

function InvoiceForm() {
  const [fullName, setFullName] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [clientFullName, setClientFullName] = useState('');
  const [clientAddress, setClientAddress] = useState('');
  const [clientPhoneNumber, setClientPhoneNumber] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [purchaseOrderNumber, setPurchaseOrderNumber] = useState('');
  const [description, setDescription] = useState('');
  const [rate, setRate] = useState('');
  const [date, setDate] = useState('');

  const pushClient = async (client:IClient) => {
    return await createClient(client)
  }

  const pushInvoice = async (invoice: IInvoice) => {
    const newInvoice = await submitData(invoice);
  };

  async function handleSubmit(event: any) {
    event.preventDefault();
    const newClient: IClient = {
      clientFullName,
      clientAddress,
      clientPhoneNumber,
      clientEmail,
    }
   
    const createdClient = await pushClient(newClient) 
   
    console.log(createdClient);

    const newInvoiceData: IInvoice = {
      client: createdClient._id,
      // _id: null,
      fullName,
      address,
      phoneNumber,
      email,
      clientFullName,
      clientAddress,
      clientPhoneNumber,
      clientEmail,
      purchaseOrderNumber,
      description,
      rate: Number(rate),
      date,
      paid: false
    };

    pushInvoice(newInvoiceData);
console.log(newInvoiceData);

    setFullName('');
    setAddress('');
    setPhoneNumber('');
    setEmail('');

    setClientFullName('');
    setClientAddress('');
    setClientPhoneNumber('');
    setClientEmail('');

    setPurchaseOrderNumber('');
    setDescription('');
    setRate('');
    setDate('');
  }

  return (
    <ChakraProvider>
      <form onSubmit={handleSubmit} autoComplete='off'>
        <div className='form-container'>
          <div className='people-details-container'>
            <div className='personal-details-container'>
              <h2>
                <strong>Personal Details</strong>
              </h2>
              <br />

              <FormControl>
                <FormLabel>Full Name</FormLabel>
                <Input
                  type='text'
                  name='client-full'
                  value={fullName}
                  placeholder='Insert full name...'
                  onChange={(e) => setFullName(e.target.value)}
                />
              </FormControl>

              <FormControl>
                <FormLabel>Address</FormLabel>
                <Input
                  type='text'
                  name='phone-number'
                  value={address}
                  placeholder='Insert address...'
                  onChange={(e) => setAddress(e.target.value)}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Phone Number</FormLabel>
                <Input
                  type='number'
                  name='phone-number'
                  value={phoneNumber}
                  placeholder='Insert phone number...'
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </FormControl>

              <FormControl>
                <FormLabel>Email Address</FormLabel>
                <Input
                  type='email'
                  name='email-address'
                  value={email}
                  placeholder='Insert email address...'
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
              <br />

              <h2>
                <strong>Client Details</strong>
              </h2>
              <br />

              <FormControl>
                <FormLabel>Full Name</FormLabel>
                <Input
                  type='text'
                  name='client-full'
                  value={clientFullName}
                  placeholder='Insert full name...'
                  onChange={(e) => setClientFullName(e.target.value)}
                />
              </FormControl>

              <FormControl>
                <FormLabel>Address</FormLabel>
                <Input
                  type='text'
                  name='client-address'
                  value={clientAddress}
                  placeholder='Insert Address...'
                  onChange={(e) => setClientAddress(e.target.value)}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Phone Number</FormLabel>
                <Input
                  type='text'
                  name='client-phone-number'
                  value={clientPhoneNumber}
                  placeholder='Insert phone number...'
                  onChange={(e) => setClientPhoneNumber(e.target.value)}
                />
              </FormControl>

              <FormControl>
                <FormLabel>Email Address</FormLabel>
                <Input
                  type='email'
                  name='client-phone-number'
                  value={clientEmail}
                  placeholder='Insert email address'
                  onChange={(e) => setClientEmail(e.target.value)}
                />
              </FormControl>
            </div>
            <div className='job-details-container'>
              <h2>
                <strong>Job Details</strong>
              </h2>
              <br />
              <FormControl>
                <FormLabel>PO Number</FormLabel>
                <Input
                  type='text'
                  name='po-number'
                  value={purchaseOrderNumber}
                  placeholder='Insert purchase order number...'
                  onChange={(e) => setPurchaseOrderNumber(e.target.value)}
                />
              </FormControl>

              {/* <button >Add Item</button> */}

              <FormControl>
                <FormLabel>Description</FormLabel>
                <Input
                  type='text'
                  name='description'
                  value={description}
                  placeholder='Insert description...'
                  onChange={(e) => setDescription(e.target.value)}
                />
              </FormControl>

              <FormControl>
                <FormLabel>Rate</FormLabel>
                <Input
                  type='text'
                  name='rate'
                  value={rate}
                  placeholder='Insert rate...'
                  onChange={(e) => setRate(e.target.value)}
                />
              </FormControl>

              <FormControl>
                <FormLabel>Due By</FormLabel>
                <Input
                  type='datetime-local'
                  name='date'
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </FormControl>

              <input type='submit' value='CREATE INVOICE' />
            </div>
          </div>
          {/* </div> */}
        </div>
      </form>
    </ChakraProvider>
  );
}

export default InvoiceForm;

{
  /* <Link href='/invoice-list'>
</Link> */
}

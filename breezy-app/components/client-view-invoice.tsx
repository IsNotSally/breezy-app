'use client';

import React from 'react';
import styles from '../styles/landing-page.module.css';
import './displayInvoice.css';
import Image from 'next/image';
import Logo from '../public/Black logo - no background.png';
import { ChakraProvider } from '@chakra-ui/react';
import { useState } from 'react';
import { Button, ButtonGroup } from '@chakra-ui/react';
import { updateData } from '../utils/dataFetch';
import { IInvoice } from '../models/invoice';

type Props = {
  invoice: IInvoice,
  dueDate: string,
  currentDate: string,
  amount: number,
}

export default function ClientViewInvoice({
  invoice,
  dueDate,
  currentDate,
  amount,
}: Props) {

  console.log('PDFFffffffff');
  console.log(invoice);
  const [invoiceStatus, setInvoiceStatus] = useState(invoice.paid);

  const updateStatus = async (invoice: IInvoice) => {
    const newInvoiceStatus = await updateData(invoice._id.toString(), invoice);
    setInvoiceStatus(newInvoiceStatus.paid);
  };

  function handleOnClick() {
    updateStatus({ ...invoice, paid: true });
  }

  return (
    <>
      <ChakraProvider>
        <div className={styles.header}>
          <div className={styles.logo}>
            <Image src={Logo} height={120} alt="logo" priority />
          </div>
        </div>
        <div className={styles.container}>
          {invoiceStatus ? (
            <div>
              <h1>Thanks for your payment!</h1>
              <a href="/">
                <Button bg="#bfdbfe" size="lg">
                  BACK TO HOME
                </Button>
              </a>
            </div>
          ) : (
            <div className="invoice-box">
              <table cellPadding="0" cellSpacing="0">
                <tr className="top">
                  <td colSpan={3}>
                    <table>
                      <tr>
                        <td className="title">
                          <Image alt='logo' src={Logo} width={150}></Image>
                        </td>

                        <td>
                          #{invoice.purchaseOrderNumber}
                          <br />
                          <br />
                          <strong>
                            PO Number:#{invoice.purchaseOrderNumber}
                          </strong>
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
                  <td colSpan={3}>
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
                          <br />
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

                <tr className="heading">
                  <td>Item</td>
                  <td>Price</td>
                </tr>

                <tr className="item">
                  <td>{invoice.description}</td>

                  <td>£{invoice.rate}</td>
                </tr>

                <tr className="total">
                  <td></td>

                  <td>Total: £{invoice.rate}</td>
                </tr>
              </table>
              <div className={styles.payButton}>
                {!invoiceStatus ? (
                  <Button onClick={handleOnClick} bg="#bfdbfe">
                    PAY INVOICE
                  </Button>
                ) : (
                  'paid!'
                )}
              </div>
            </div>
          )}
        </div>
      </ChakraProvider>
    </>
  );
}

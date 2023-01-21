'use client';

import '../components/displayClient.css';

import React from 'react';
import Link from 'next/link';
import { BsPersonCircle } from 'react-icons/bs';
import IClient from '../interfaces/clients';

function DisplayClients({ clientData }: { clientData: IClient }) {
  return (
    <div className='container'>
      <div className='grid'>
        <Link href={`/members-only/invoice/${clientData._id}`}>
          <div className='box'>
            <div className='icon'>
              <BsPersonCircle />
            </div>
            <strong>
              <p>{clientData.clientFullName}</p>
            </strong>
            <p>{clientData.clientAddress}</p>
            <p>{clientData.clientPhoneNumber}</p>
            <p>{clientData.clientEmail}</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default DisplayClients;

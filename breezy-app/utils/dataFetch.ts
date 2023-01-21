// import 'server-only'

import { IInvoice } from "../models/model";

const uri = 'http://localhost:3000';

export async function getData() {
  console.log('Pleaasssedeeeeee');

  const res = await fetch(`${uri}/api/invoice`);
  if (!res.ok) {
    throw new Error('failed to fetch data');
  }

  return res.json();
}

export async function getDataById(id: string) {

  try {
    console.log(`${uri}/api/invoice/${id}`);
  
  const res = await fetch(`${uri}/api/invoice/${id}`);
  return res.json();
  } catch (error) {
    console.log(error);
    
  }
  
}

export async function getInvoiceDataById(id: string) {
  const res = await fetch(`${uri}/api/invoice/${id}`);
  if (!res.ok) {
    throw new Error('failed to fetch data');
  }

  return res.json();
}

export async function submitData<Invoice>(data: IInvoice) {
  try {
    const res = await fetch(`${uri}/api/invoice`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return res.json();
  } catch (error) {
    console.log(error);
  }
}

export async function updateData(id: string, data: IInvoice) {
  try {
    const res = await fetch(`${uri}/api/invoice/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return res.json();
  } catch (error) {
    console.log(error);
  }
}

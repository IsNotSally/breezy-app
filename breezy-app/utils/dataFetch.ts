// import 'server-only'

import IClient from '../interfaces/clients';
import IInvoice from '../interfaces/invoice';

const uri = 'http://localhost:3000';

export async function getData() {
  try {
    const res = await fetch(`${uri}/api/invoices`);
    return res.json();
  } catch (error) {
    throw new Error('failed to fetchhhhhh : ' + error);
  }
}

export async function getClientData() {
  try {
    const res = await fetch(`${uri}/api/clients`);
    return res.json();
  } catch (error) {
    throw new Error('failed to fetchhhhhh : ' + error);
  }
}

export async function getClientDataById(id: string) {
  try {
    const res = await fetch(`${uri}/api/clients/${id}`);

    return res.json();
  } catch (error) {
    console.log(error);
  }
}

export async function getDataById(id: string) {
  try {
    const res = await fetch(`${uri}/api/invoices/${id}`);

    return res.json();
  } catch (error) {
    console.log(error);
  }
}

export async function getInvoiceDataById(id: string) {
  const res = await fetch(`${uri}/api/invoices/po/${id}`);
  // if (!res.ok) {
  //   alert(res.json());
  //   throw new Error('failed to fetch data');
  // }

  return res.json();
}

export async function getInvoiceDataByUserId(id: string) {
  const res = await fetch(`${uri}/api/invoices/user/${id}`);
  if (!res.ok) {
    throw new Error('failed to fetch data');
  }

  return res.json();
}

export async function submitData<IInvoice>(data: IInvoice) {
  try {
    const res = await fetch(`${uri}/api/invoices`, {
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
    const res = await fetch(`${uri}/api/invoices/${id}`, {
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

export async function createClient<IClient>(data: IClient) {
  try {
    const res = await fetch(`${uri}/api/clients`, {
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

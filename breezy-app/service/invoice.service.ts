import IInvoice from '../interfaces/invoice';

const uri = process.env.APIURL!;

export async function getInvoices() {
  try {
    const res = await fetch(`${uri}/api/invoices`);
    return res.json();
  } catch (error) {
    throw new Error('failed to fetchhhhhh : ' + error);
  }
}

export async function getInvoiceById(id: string) {
  try {
    const res = await fetch(`${uri}/api/invoices/${id}`);

    return res.json();
  } catch (error) {
    console.log(error);
  }
}

export async function getInvoiceByPoNumber(poNumber: string) {
  const res = await fetch(`${uri}/api/invoices/po/${poNumber}`);
  // if (!res.ok) {
  //   alert(res.json());
  //   throw new Error('failed to fetch data');
  // }

  return res.json();
}

export async function createInvoice<IInvoice>(data: IInvoice) {
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

export async function updateInvoice(id: string, data: IInvoice) {
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

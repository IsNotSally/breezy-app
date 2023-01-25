const uri = process.env.APIURL!;

export async function getClients() {
  try {
    const res = await fetch(`${uri}/api/clients`);
    return res.json();
  } catch (error) {
    throw new Error('failed to fetchhhhhh : ' + error);
  }
}

export async function getClientById(id: string) {
  try {
    const res = await fetch(`${uri}/api/clients/${id}`);

    return res.json();
  } catch (error) {
    console.log(error);
  }
}

export async function getClientInvoices(id: string) {
  const res = await fetch(`${uri}/api/clients/${id}/invoices`);
  return res.json();
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

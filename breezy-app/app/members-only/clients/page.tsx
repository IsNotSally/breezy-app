import React from 'react';
import DisplayClients from '../../../components/displayClients';
import IClient from '../../../interfaces/clients';
import { getClientData, getData } from '../../../utils/dataFetch';

export default async function FetchClients() {
  const client: IClient[] = await getClientData();

  return (
    <>
      <section>
        {client.map((clt) => (
          <div key={clt._id}>
            <DisplayClients key={clt._id} clientData={clt} />
          </div>
        ))}
      </section>
    </>
  );
}

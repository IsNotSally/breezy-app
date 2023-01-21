import React from 'react';
import DisplayClients from '../../../components/displayClients';
import { IClient } from '../../../models/client';
import { getData } from '../../../utils/dataFetch';


export default async function FetchClients() {
  const data = await getData();
  const client: Array<IClient> = data;

  return (
    <>
      {client.map((clt) => (
        <div key={clt._id.toString()}>
          <DisplayClients key={clt._id.toString()} clientData={clt} />
        </div>
      ))}
    </>
  );
}

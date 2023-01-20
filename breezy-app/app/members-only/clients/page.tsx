import React from 'react';
import DisplayClients from '../../../components/displayClients';
import { IClient } from '../../../models/client';
import { getData } from '../../../utils/dataFetch';


export default async function FetchClients() {
  const data: [IClient] = await getData();

  return (
    <>
      {data.map((data) => (
        <div key={data._id.toString()}>
          <DisplayClients key={data._id.toString()} clientData={data} />
        </div>
      ))}
    </>
  );
}

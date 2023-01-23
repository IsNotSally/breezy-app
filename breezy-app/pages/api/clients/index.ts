
import { NextApiRequest, NextApiResponse } from 'next/types';
import Client from '../../../models/client';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  switch (method) {
    case 'GET':
      try {
        
      } catch (e) {
        
      }
      break;
    case 'POST':
      try {

        const client = await Client.create(req.body);
        
        res.status(201).json(client);
      } catch (e) {
        console.log(e);
        res.status(400).json(req.body);
      }
      break;
    case 'DELETE':
      try {
       
      } catch (e) {
       
      }
  }
}

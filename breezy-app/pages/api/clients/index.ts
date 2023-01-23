import { NextApiRequest, NextApiResponse } from 'next/types';
import Client from '../../../models/client';
import Invoice from '../../../models/invoice';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  switch (method) {
    case 'GET':
      try {
        const clients = await Client.find();
        res.status(200).json(clients);
      } catch (e) {
        res.status(400).json({ success: false });
      }
      break;
    case 'POST':
      try {
        const client = await Client.create(req.body);
        client!.invoices = await Invoice.find({ client: client._id });
        res.status(201).json(client);
      } catch (e) {
        console.log(e);
        res.status(400).json(req.body);
      }
      break;
    case 'DELETE':
      try {
      } catch (e) {}
  }
}

import Client from '../../../models/client';
import { NextApiRequest, NextApiResponse } from 'next';
import IClient from '../../../interfaces/clients';
import Invoice from '../../../models/invoice';
import IInvoice from '../../../interfaces/invoice';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;
  const id = req.query.id;

  switch (method) {
    case 'GET':
      try {
        const client = await Client.findOne({ _id: id });

        if (!client) {
          return res.status(400).json(client);
        }
        res.status(200).json(client);
      } catch (error) {
        res.status(400).json(error);
      }
      break;
    case 'DELETE':
      try {
        const client = await Client.findByIdAndDelete(id);
        res.status(201).json({ success: true });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case 'PUT':
      try {
        const client = await Client.findOneAndReplace(
          { _id: req.body._id },
          req.body
        );

        if (!client) {
          return res.status(400).json({ success: false });
        }
        client.paid = true;
        client.save();

        res.status(200).json(client);
      } catch (error) {
        console.log(error);
        res.status(400).json({ success: false });
      }
  }
}

import dbConnect from 'db/db';
import { NextApiRequest, NextApiResponse } from 'next';
import Invoice from '../../../../models/invoice';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;
  const id = req.query.id;

  switch (method) {
    case 'GET':
      try {
        await dbConnect();
        const invoices = await Invoice.find({ client: id });
        if (!invoices) {
          return res.status(400).json(invoices);
        }
        res.status(200).json(invoices);
      } catch (error) {
        res.status(400).json(error);
      }
  }
}

import connectMongo from '../../../../service/connectMongo';
import Invoice from '../../../../models/invoice';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;
  const id = req.query.id;

  switch (method) {
    case 'GET':
      try {
        const invoice = await Invoice.findOne({ purchaseOrderNumber: id });
        if (!invoice) {
          return res
            .status(400)
            .json({ error: 'No invoice exists with the PO number: ' + id });
        }
        res.status(200).json(invoice);
      } catch (error) {
        res.status(400).json(error);
      }
  }
}

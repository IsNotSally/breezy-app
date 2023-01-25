import Invoice from '../../../models/invoice';
import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from 'db/db';

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
        const invoice = await Invoice.findOne({ _id: id });
        if (!invoice) {
          return res.status(400).json(invoice);
        }
        res.status(200).json(invoice);
      } catch (error) {
        res.status(400).json(error);
      }
      break;
    case 'PUT':
      try {
        await dbConnect();
        const invoice = await Invoice.findOneAndReplace(
          { _id: req.body._id },
          req.body
        );

        if (!invoice) {
          return res.status(400).json({ success: false });
        }
        invoice.paid = true;
        invoice.save();

        res.status(200).json(invoice);
      } catch (error) {
        console.log(error);
        res.status(400).json({ success: false });
      }
  }
}

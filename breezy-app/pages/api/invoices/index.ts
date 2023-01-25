import Invoice from '../../../models/invoice';
import { NextApiRequest, NextApiResponse } from 'next/types';
import dbConnect from 'db/db';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  switch (method) {
    case 'GET':
      try {
        await dbConnect();
        const invoice = await Invoice.find();
        res.status(200).json(invoice);
      } catch (e) {
        res.status(400).json({ success: false });
      }
      break;
    case 'POST':
      try {
        await dbConnect();
        const invoice = await Invoice.create(req.body);
        res.status(201).json(invoice);
      } catch (e) {
        console.log(e);
        res.status(400).json(req.body);
      }
  }
}

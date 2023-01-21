import connectMongo from '../../../utils/connectMongo';
import Invoice from '../../../models/invoice';
import { NextApiRequest, NextApiResponse } from 'next/types';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  switch (method) {
    case 'GET':
      try {
        console.log('give me invoice');
        const invoice = await Invoice.find();
        res.status(200).json(invoice);
      } catch (e) {
        res.status(400).json({ success: false });
      }
      break;
    case 'POST':
      try {
        const invoice = await Invoice.create(req.body);
        res.status(201).json(invoice);
      } catch (e) {
        console.log(e);
        res.status(400).json(req.body);
      }
      break;
    case 'DELETE':
      try {
        const invoice = await Invoice.findByIdAndDelete(req.query.id);
        res.status(201).json(invoice);
      } catch (e) {
        console.log(e);
        res.status(400).json('Error!');
      }
  }
}

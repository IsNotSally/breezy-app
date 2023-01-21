import connectMongo from '../../../../utils/connectMongo';
import Invoice from '../../../../models/invoice';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;
  const id = req.query.id;
  console.log(req.query);
  console.log(req.method);
  console.log(id);

  switch (method) {
    case 'GET':
      try {
        const invoice = await Invoice.findOne({ purchaseOrderNumber: id });
        if (!invoice) {
          return res.status(400).json(invoice);
        }
        res.status(200).json(invoice);
      } catch (error) {
        res.status(400).json(error);
      }
      break;
    case 'DELETE':
      try {
        const invoice = await Invoice.findByIdAndDelete(id);
        res.status(201).json({ success: true });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case 'PUT':
      try {
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

import Client from '../../../../models/client';
import { NextApiRequest, NextApiResponse } from 'next';
import AppError from '../../../../utils/appError';
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
        const client = await Client.findOne({ _id: id });
        if (!client) {
          res.status(400).json(new AppError(`Client doesn't exist`, 400, null));
        }
        res.status(200).json(client);
      } catch (e) {
        const err = new AppError('', 500, e);
        console.log('My Errorrrr : ' + err);

        res.status(500).json(new AppError('', 500, e));
      }
  }
}

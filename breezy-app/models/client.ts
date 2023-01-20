import mongoose, { Schema, model, models } from 'mongoose';

export interface IClient {
  _id: mongoose.Types.ObjectId;
  clientFullName: string;
  clientAddress: string;
  clientPhoneNumber: number;
  clientEmail: string;
}

const clientSchema = new Schema<IClient>({
  clientFullName: {
    type: String,
    required: false,
  },
  clientAddress: {
    type: String,
    required: false,
  },
  clientPhoneNumber: {
    type: Number,
    required: false,
  },
  clientEmail: {
    type: String,
    required: false,
  }
});

const Client = model<IClient>('Client', clientSchema);

export default Client;

import mongoose from '../db/db';
import IClient from '../interfaces/clients';

const clientSchema = new mongoose.Schema<IClient>({
  clientFullName: {
    type: String,
    required: false,
  },
  clientAddress: {
    type: String,
    required: false,
  },
  clientPhoneNumber: {
    type: String,
    required: false,
  },
  clientEmail: {
    type: String,
    required: false,
  },
});

const Client = mongoose.models.Client ||mongoose.model<IClient>('Client', clientSchema);

export default Client;

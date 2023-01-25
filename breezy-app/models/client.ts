import mongoose from 'mongoose';
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

export default mongoose.models.Client || mongoose.model('Client', clientSchema);

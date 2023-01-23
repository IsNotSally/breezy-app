import mongoose from '../db/db';
import IInvoice from '../interfaces/invoice';

const invoiceSchema = new mongoose.Schema<IInvoice>({
  client: {
    type: mongoose.Types.ObjectId,
    required: true
  },
  fullName: {
    type: String,
    required: false,
  },
  address: {
    type: String,
    required: false,
  },
  phoneNumber: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: false,
  },

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
  purchaseOrderNumber: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    required: false,
  },
  rate: {
    type: Number,
    required: false,
  },

  date: {
    type: String,
    required: false,
  },
  paid: {
    type: Boolean,
    required: false,
  },
});

const Invoice =  mongoose.models.Invoice || mongoose.model<IInvoice>('Invoice', invoiceSchema);

export default Invoice;

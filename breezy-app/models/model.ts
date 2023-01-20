import { Schema, model, models } from 'mongoose';

interface Invoice {
  fullName:string,
  address: string,
  phoneNumber: string, 
  email: string,
  clientFullName: string,
  clientAddress: string,
  clientPhoneNumber: number,
  clientEmail: string,
  purchaseOrderNumber: number,
  description: string,
  rate: number,
  date: Date,
  paid: boolean
}

const invoiceSchema = new Schema<Invoice>({
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
    type: Number,
    required: false,
  },
  clientEmail: {
    type: String,
    required: false,
  },
  purchaseOrderNumber: {
    type: Number,
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
    type: Date,
    required: false,
  },
  paid: {
    type: Boolean,
    required: false,
  },
});

const Invoice = models.Invoice || model<Invoice>('Invoice', invoiceSchema);

export default Invoice;

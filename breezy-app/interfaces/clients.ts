import mongoose from 'mongoose';
import IInvoice from './invoice';

export default interface IClient {
  _id: any;
  clientFullName: string;
  clientAddress: string;
  clientPhoneNumber: string;
  clientEmail: string;
  invoices: IInvoice[];
}

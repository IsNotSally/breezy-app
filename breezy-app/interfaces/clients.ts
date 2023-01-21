import mongoose from 'mongoose';

export default interface IClient {
  _id: any,
  clientFullName: string;
  clientAddress: string;
  clientPhoneNumber: number;
  clientEmail: string;
}

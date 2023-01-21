import mongoose from 'mongoose';

export default interface IClient {
  clientFullName: string;
  clientAddress: string;
  clientPhoneNumber: number;
  clientEmail: string;
}

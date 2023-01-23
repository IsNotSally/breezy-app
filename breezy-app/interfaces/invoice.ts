import IClient from "./clients";

export default interface IInvoice {
  client: IClient,
  _id: any,
  fullName: string;
  address: string;
  phoneNumber: string;
  email: string;
  clientFullName: string;
  clientAddress: string;
  clientPhoneNumber: string;
  clientEmail: string;
  purchaseOrderNumber: string;
  description: string;
  rate: number;
  date: string;
  paid: boolean;
}

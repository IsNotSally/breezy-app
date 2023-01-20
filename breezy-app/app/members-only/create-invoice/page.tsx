import InvoiceForm from '../../../components/invoice-form';
import { getData } from '../../../utils/dataFetch';

export default async function CreateInvoice() {
  const data = await getData();

  return (
    <>
      <InvoiceForm />
    </>
  );
}

import '../../../components/displayInvoiceList.css';
import DisplayInvoiceList from '../../../components/displayInvoiceList';
import IInvoice from '../../../interfaces/invoice';
import { getInvoices } from '../../../service/invoice.service';

export default async function FetchInvoiceList() {
  const data: IInvoice[] = await getInvoices();

  const invoices: Array<IInvoice> = data;

  return (
    <>
      <section>
        <DisplayInvoiceList invoices={invoices} />
      </section>
    </>
  );
}

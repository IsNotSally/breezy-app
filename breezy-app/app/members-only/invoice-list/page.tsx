
import { getData } from '../../../utils/dataFetch';
import '../../../components/displayInvoiceList.css';
import DisplayInvoiceList from '../../../components/displayInvoiceList';
import IInvoice from '../../../interfaces/invoice'; 

export default async function FetchInvoiceList() {
  console.log('herrrrrrrr');
  
  const data:IInvoice[] = await getData();
  console.log(data);
  
  const invoices: Array<IInvoice> = data;

  return (
    <>
    <section>
      <DisplayInvoiceList invoices={invoices} />
      </section>
    </>
  );
}

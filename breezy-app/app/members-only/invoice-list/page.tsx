
import { getData } from '../../../utils/dataFetch';
import '../../../components/displayInvoiceList.css';
import DisplayInvoiceList from '../../../components/displayInvoiceList';
import { IInvoice} from '../../../models/model';

export default async function FetchInvoiceList() {
  console.log('herrrrrrrr');
  
  const data = await getData();
  console.log(data);
  
  const invoice: Array<IInvoice>= data;

  return (
    <>
      <DisplayInvoiceList invoice={invoice} />
    </>
  );
}

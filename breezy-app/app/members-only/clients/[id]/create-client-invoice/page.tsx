import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import InvoiceForm from "../../../../../components/invoice-form";

export default async function CreateInvoice({ params } : {params: Params}) {
  const id = params.id;
  return (
    <>
      <InvoiceForm existingClient={id} />
    </>
  );
}

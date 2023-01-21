import React from 'react';

export default function ClientViewInvoice({ children } : {children: React.ReactNode}) {
  return (
    <>
      <section>{children}</section>
    </>
  );
}

import React from 'react';

export default function InvoiceLayout({ children}: { children : React.ReactNode }) {
  return (
    <>
      <section>{children}</section>
    </>
  );
}

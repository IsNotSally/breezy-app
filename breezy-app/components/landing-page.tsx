'use client';

import React from 'react';
import styles from '../styles/landing-page.module.css';
import Image from 'next/image';
import logo from '../public/Black logo - no background.png';
import { BsArrowRight } from 'react-icons/bs';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { getInvoiceByPoNumber } from '../service/invoice.service';

export default function LandingPage() {
  const router = useRouter();

  const [showInput, setShowInput] = useState(false);
  const [inputValue, setInputValue] = useState('');

  async function handleSubmit(e: any) {
    e.preventDefault();
    const invoice = await getInvoiceByPoNumber(inputValue);
    if (!invoice.error) {
      router.push(`/pay-invoice/${inputValue}`);
    } else {
      alert(invoice.error);
    }

    setInputValue('');
  }

  return (
    <>
      <div className={styles.header}>
        <div className={styles.logo}>
          <Image src={logo} height={120} priority alt="logo" />
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.loginBox}>
          <a href="/members-only">
            <h2>Freelancer Login </h2>
          </a>
          <span className={styles.arrow}>
            <BsArrowRight />
          </span>
        </div>
        <div className={styles.loginBox}>
          <button onClick={() => setShowInput(!showInput)}>
            <h2>Pay An Invoice</h2>
          </button>
          <span className={styles.arrow}>
            <BsArrowRight />
          </span>
        </div>
      </div>
      <div className={styles.inputBox}>
        {/* <span className={styles.input}> */}
        {showInput && (
          <form
            onSubmit={handleSubmit}
            id="pay-invoice"
            className={styles.input}
          >
            <input
              onChange={(e) => setInputValue(e.target.value)}
              value={inputValue}
              type="text"
              placeholder="Insert PO number"
            />
          </form>
        )}
      </div>
    </>
  );
}

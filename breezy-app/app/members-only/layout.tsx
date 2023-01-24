// 'use client';

import {
  BsFillFileEarmarkTextFill,
  BsPeopleFill,
  BsPencilSquare,
  BsFront,
} from 'react-icons/bs';

import '../../styles/globals.css';
import Link from 'next/link';
import styles from '../../styles/sidebar.module.css';
import Image from 'next/image';
import Logo from '../../public/For Web/png/Black logo - no background.png';
import React from 'react';
import Logout from './logout';
import { UserProvider } from '@auth0/nextjs-auth0/client';

export default function Layout({children} : { children : React.ReactNode }) {

  

  const menus = [
    {
      title: 'Create Invoice',
      link: '/members-only/create-invoice',
      icon: <BsPencilSquare />,
    },
    {
      title: 'Invoices',
      icon: <BsFillFileEarmarkTextFill />,
      link: '/members-only/invoice-list',
    },
    {
      title: 'Clients',
      icon: <BsPeopleFill />,
      link: '/members-only/clients',
    },
    { title: 'Dashboard', icon: <BsFront />, link: '/members-only/' },
  ];

  return (
    
      <UserProvider>

<div className={styles.pageContainer}>
        <div className={styles.sidebar}>
          <div className={styles.logo}>
            <Image src={Logo} alt='breezy-logo' width={250} priority></Image>
          </div>

          <ul className={styles.menuItems}>
            {menus.map((menu, index) => (
              <>
                <li key={index} className={styles.menuInfo}>
                  <span className={styles.menuIcon}>{menu.icon}</span>
                  <Link href={menu.link}>
                    <span className={styles.menuItem}>{menu.title}</span>
                  </Link>
                </li>
              </>
            ))}
          </ul>

          <div className={styles.logout}>
            <Logout></Logout>
          </div>
        </div>
        {children}
      </div>

      </UserProvider>
  );
}


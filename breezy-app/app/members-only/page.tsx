

import React from 'react';
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';
import Logo from '../../public/LOGO 2.png';
import Image from 'next/image';
import {logoContainer} from '../../styles/sidebar.module.css';

const MembersOnly = ()=> {
  return (
    <div className={logoContainer}>
      <Image src={Logo} width={600} alt='logo'/>
    </div>
  );
}
export default MembersOnly;

export const getServerSideProps = withPageAuthRequired;
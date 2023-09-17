import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {UseState, UseEffect} from 'react';
import {SignIn,SignOut,useSession, getProviders } from 'next-auth/react';


const Nav = () => {
  return (
    <nav className='flex-between w-full mb-16 pt-3'>
        <Link href='/' className='flex gap-2 fllex-center'>
            <Image src='/assets/images/logo.svg' alt='promptopia logo' width={30} height={50} className='object-contain' />
            <p className='logo_text'>Promptopia</p>
        </Link>
    
    </nav>
  )
}

export default Nav
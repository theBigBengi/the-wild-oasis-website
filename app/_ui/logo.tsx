import Image from "next/image";
import React from "react";

type Props = {};

export const Logo = (props: Props) => {
  return (
    <a href='/' className='flex items-center gap-4 z-10'>
      <Image src='/icon.png' height='60' width='60' alt='The Wild Oasis logo' />
      <span className='text-xl font-semibold text-primary-100'>
        The Wild Oasis
      </span>
    </a>
  );
};

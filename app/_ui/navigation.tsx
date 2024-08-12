import Link from "next/link";
import React from "react";

type Props = {};

export function Navigation({}: Props) {
  return (
    <ul>
      <li>
        <Link href='/about'>About</Link>
      </li>
      <li>
        <Link href='/account'>Account</Link>
      </li>
      <li>
        <Link href='/cabins'>Cabins</Link>
      </li>
    </ul>
  );
}

'use client';

import { ReactNode } from "react";

export default function PostClient({children} : { children:ReactNode}) {
  return (
    <>
      {children}
    </>
  );
}
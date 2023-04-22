'use client'
import { ReactNode } from "react";
import { AppStateProvider } from "./context/AppContext";


export default function Providers({ 
    children 
  }: { 
  children: ReactNode 
  }) {
  return (
    <AppStateProvider>
        {children}
    </AppStateProvider>
  )
}
import Header from "./header";
import Head from "next/head";
import Grid from "./components/body/Grid";
import './globals.scss';
import LeftSidebar from "./components/body/LeftSidebar";
import RightSidebar from "./components/body/RightSidebar";
import { Inter  } from '@next/font/google'

const titi = Inter ({
  weight : ['400'],
  subsets: ['latin']
})
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={titi.className}>
          <Grid>
            {/* @ts-expect-error Server Component */}
            <Header />
            {children}
            {/* @ts-expect-error Server Component */}
            <RightSidebar/>
          </Grid>
          
      </body>
    </html>
  );
}
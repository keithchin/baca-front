import Header from "./header";
import Grid from "./components/body/Grid";
import './globals.scss';
import LeftSidebar from "./components/body/LeftSidebar";
import RightSidebar from "./components/body/RightSidebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* @ts-expect-error Server Component */}
          <Header />
          <Grid>
            {/* @ts-expect-error Server Component */}
            <LeftSidebar/>
            {children}
            {/* @ts-expect-error Server Component */}
            <RightSidebar/>
          </Grid>
          
      </body>
    </html>
  );
}
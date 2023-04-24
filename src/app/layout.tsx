import Header from "./header";
import './globals.scss';

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
          {children}
          
      </body>
    </html>
  );
}
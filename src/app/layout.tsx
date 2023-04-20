import Providers from "./providers";
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
        <Header />
          {children}
      </body>
    </html>
  );
}
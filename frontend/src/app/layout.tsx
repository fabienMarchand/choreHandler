import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Navbar from './components/Navbar';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  <html lang="fr">
    <body>
      <Navbar />
      {children}
    </body>
  </html>;
};

export default RootLayout;
s
import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageTransition from '@/components/PageTransition';
import { Space_Grotesk } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata = {
  title: 'Therenz Jaromohom — Interface & Logo Designer',
  description: 'Portfolio of Therenz Jaromohom — Interface Designer and Logo Designer based in Cebu, Philippines.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{
        
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        background: '#0a0a0a',
      }}>
        <Navbar />
        <main style={{ flex: 1 }}>
          <PageTransition>
          {children}
          </PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}

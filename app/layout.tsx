import type { Metadata, Viewport } from 'next';
import './globals.css';
import { ScrollReveal } from '../components/scroll-reveal';

export const metadata: Metadata = {
  title: 'Atomenos — Systems built around your business',
  description: 'Atomenos builds intelligent systems — software, AI, automation, and digital experiences — designed around how your business actually works.'
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover'
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {children}
        <ScrollReveal />
      </body>
    </html>
  );
}

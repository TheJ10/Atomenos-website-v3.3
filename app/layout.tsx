import type { Metadata, Viewport } from 'next';
import './globals.css';
import { ScrollReveal } from '../components/scroll-reveal';

const siteUrl = 'https://www.atomenos.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: 'Atomenos — Systems built around your business',
    template: '%s — Atomenos',
  },

  description:
    'Atomenos builds intelligent systems — software, AI, automation, and digital experiences — designed around how your business actually works.',

  applicationName: 'Atomenos',

  alternates: {
    canonical: '/',
  },

  icons: {
    icon: '/icon.png',
    shortcut: '/icon.png',
    apple: '/icon.png',
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: 'website',
    url: siteUrl,
    siteName: 'Atomenos',
    title: 'Atomenos — Systems built around your business',
    description:
      'Atomenos builds intelligent systems — software, AI, automation, and digital experiences — designed around how your business actually works.',
  },

  twitter: {
    card: 'summary',
    title: 'Atomenos — Systems built around your business',
    description:
      'Atomenos builds intelligent systems — software, AI, automation, and digital experiences — designed around how your business actually works.',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Atomenos',
  url: siteUrl,
  logo: `${siteUrl}/icon.png`,
  email: 'hello@atomenos.com',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {children}
        <ScrollReveal />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </body>
    </html>
  );
}

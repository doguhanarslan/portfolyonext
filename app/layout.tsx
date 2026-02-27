import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import { ThemeProvider } from '@/shared/components/providers/ThemeProvider';
import './globals.css';

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-inter',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
});

export const metadata: Metadata = {
  title: {
    default: 'Doğuhan Arslan | Software Architect & Full-Stack Developer',
    template: '%s | Doğuhan Arslan',
  },
  description:
    'Software Architect & Full-Stack Developer specializing in .NET, Flutter, and Clean Architecture. Building multi-tenant SaaS platforms and AI-integrated mobile applications.',
  metadataBase: new URL('https://doguhanarslan.com'),
  openGraph: {
    title: 'Doğuhan Arslan | Software Architect',
    description: 'Building scalable systems with .NET, Flutter, and Clean Architecture.',
    url: 'https://doguhanarslan.com',
    siteName: 'Doğuhan Arslan',
    locale: 'tr_TR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Doğuhan Arslan | Software Architect',
    description: 'Building scalable systems with .NET, Flutter, and Clean Architecture.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}

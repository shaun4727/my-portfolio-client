import type { Metadata } from 'next';
import { Bayon, Merriweather_Sans } from 'next/font/google';
import '../../asset/root.css';
import NavigationBar from '@/components/global/components/NavigationBar';
import FooterSection from '@/components/global/components/footer-section';
import { headers } from 'next/headers';
import { Toaster } from 'sonner';

const bayonFont = Bayon({
  variable: '--font-bayon',
  weight: ['400'],
  subsets: ['khmer'],
});

const merriweatherSans = Merriweather_Sans({
  variable: '--font-weather',
  subsets: ['cyrillic-ext'],
  style: ['italic', 'normal'],
});

export const metadata: Metadata = {
  title: 'Portfolio App',
};

const avoidRoutes = ['/ps-dashboard', '/ps-login'];

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersList = await headers();
  // read the custom x-url header
  const header_url = headersList.get('x-url') || '';

  return (
    <html lang="en">
      <body
        className={`${bayonFont.variable} ${merriweatherSans.variable} body-background`}
      >
        <Toaster />
        {!avoidRoutes.includes(header_url) && <NavigationBar />}
        {children}
        {!avoidRoutes.includes(header_url) && <FooterSection />}
      </body>
    </html>
  );
}

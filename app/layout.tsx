import './globals.css';
import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import CustomCursor from '@/components/custom-cursor';
import Preloader from '@/components/preloader';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Mondrian Portfolio',
  description: 'A Neoplasticism-inspired portfolio website',
  keywords: ['portfolio', 'developer', 'designer', 'mondrian', 'neoplasticism'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={spaceGrotesk.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Preloader />
          <CustomCursor />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
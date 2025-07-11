import { Bricolage_Grotesque } from 'next/font/google';

const bricolage_grotesque = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: ['300', '600'],
  variable: '--font-sans',
});

export default function RootLayout({ 
    children 
  }: { 
    children: React.ReactNode
  }) {
  return (
    <html lang="en" className={bricolage_grotesque.variable}>
      <body>{children}</body>
    </html>
  );
}

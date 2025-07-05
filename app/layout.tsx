import { onest } from '@/app/ui/fonts';
import '@/app/ui/global.css'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | Acme Dashboard',
    default: 'Acme Dashboard',
  },
  description: 'The official Next.js Learn Dashboard built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${onest.className} antialiased`}>
        {children}
        <footer className='py-8 flex items-center justify-center bg-gray-50'>
          Creado por Walinn Paredes.
        </footer>
      </body>
    </html>
  );
}

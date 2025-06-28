import { onest } from '@/app/ui/fonts';
import '@/app/ui/global.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${onest.className} antialiased`}>
        {children}
        <footer className='py-8 flex items-center justify-center bg-gray-50'>
          Creado por Walinn Paredes.
        </footer>
      </body>
    </html>
  );
}

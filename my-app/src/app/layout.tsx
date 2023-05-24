import { Roboto } from 'next/font/google';
 
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'Next é foda... entenda',
  description: 'Criado com next porque nois é foda',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={roboto.className}>{children}</body>
    </html>
  )
}

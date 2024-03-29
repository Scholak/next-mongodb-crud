import ClientProviders from '@/providers/ClientProviders'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Contact List',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
		<html lang='en'>
			<body className={inter.className} suppressHydrationWarning={true}>
				<ClientProviders>{children}</ClientProviders>
			</body>
		</html>
	)
}

import Sidebar from '@/components/Sidebar'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = { title: 'CorpNet Intranet' }

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body
				className={`${inter.className} flex bg-slate-50 min-h-screen`}
			>
				<Sidebar />
				<main className="flex-1 flex flex-col overflow-auto">
					{children}
				</main>
			</body>
		</html>
	)
}

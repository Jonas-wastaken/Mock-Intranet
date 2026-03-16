'use client'
import { Home, Megaphone, Ticket, Users } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
	{ href: '/', label: 'Dashboard', icon: Home },
	{ href: '/announcements', label: 'Announcements', icon: Megaphone },
	{ href: '/directory', label: 'Employee Directory', icon: Users },
	{ href: '/it-helpdesk', label: 'IT Helpdesk', icon: Ticket },
]

export default function Sidebar() {
	const pathname = usePathname()
	return (
		<aside className="w-60 min-h-screen bg-slate-900 text-white flex flex-col p-4 gap-1 shrink-0">
			<div className="text-xl font-bold mb-6 px-2 text-blue-400">
				CorpNet Intranet
			</div>
			{links.map(({ href, label, icon: Icon }) => (
				<Link
					key={href}
					href={href}
					className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors
            ${pathname === href ? 'bg-blue-600 text-white' : 'text-slate-300 hover:bg-slate-700'}`}
				>
					<Icon size={16} />
					{label}
				</Link>
			))}
		</aside>
	)
}

import { Avatar, AvatarFallback } from '@/components/ui/avatar'

export default function TopBar({ title }: { title: string }) {
	return (
		<header className="h-14 border-b flex items-center justify-between px-6 bg-white">
			<h1 className="text-lg font-semibold text-slate-800">{title}</h1>
			<div className="flex items-center gap-3">
				<span className="text-sm text-slate-500">Thomas Becker</span>
				<Avatar className="h-8 w-8">
					<AvatarFallback className="bg-blue-600 text-white text-xs">
						TB
					</AvatarFallback>
				</Avatar>
			</div>
		</header>
	)
}

import TopBar from '@/components/TopBar'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { employees } from '@/lib/mock-data'

export default function DirectoryPage() {
	return (
		<>
			<TopBar title="Employee Directory" />
			<div className="p-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
				{employees.map((e) => (
					<Card key={e.id}>
						<CardContent className="pt-4 flex items-center gap-4">
							<Avatar className="h-12 w-12">
								<AvatarFallback className="bg-blue-600 text-white">
									{e.avatar}
								</AvatarFallback>
							</Avatar>
							<div>
								<p className="font-semibold text-slate-800">
									{e.name}
								</p>
								<p className="text-xs text-slate-500">
									{e.role}
								</p>
								<p className="text-xs text-slate-400">
									{e.email}
								</p>
								<Badge
									variant="secondary"
									className="mt-1 text-xs"
								>
									{e.dept}
								</Badge>
							</div>
						</CardContent>
					</Card>
				))}
			</div>
		</>
	)
}

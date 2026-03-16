import TopBar from '@/components/TopBar'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { announcements } from '@/lib/mock-data'

export default function AnnouncementsPage() {
	return (
		<>
			<TopBar title="Announcements" />
			<div className="p-6 grid gap-4">
				{announcements.map((a) => (
					<Card
						key={a.id}
						className={a.urgent ? 'border-red-300' : ''}
					>
						<CardContent className="pt-4 flex items-start justify-between">
							<div>
								<p className="font-semibold text-slate-800">
									{a.title}
								</p>
								<p className="text-xs text-slate-400 mt-1">
									{a.date}
								</p>
							</div>
							<div className="flex gap-2 mt-1">
								{a.urgent && (
									<Badge variant="destructive">Urgent</Badge>
								)}
								<Badge variant="outline">{a.category}</Badge>
							</div>
						</CardContent>
					</Card>
				))}
			</div>
		</>
	)
}

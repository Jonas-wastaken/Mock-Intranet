import TopBar from '@/components/TopBar'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { announcements, stats } from '@/lib/mock-data'

export default function DashboardPage() {
	return (
		<>
			<TopBar title="Dashboard" />
			<div className="p-6 grid gap-6">
				{/* Stats Row */}
				<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
					{stats.map((s) => (
						<Card key={s.label}>
							<CardHeader className="pb-1">
								<CardTitle className="text-sm text-slate-500 font-medium">
									{s.label}
								</CardTitle>
							</CardHeader>
							<CardContent>
								<p className="text-3xl font-bold text-slate-800">
									{s.value}
								</p>
							</CardContent>
						</Card>
					))}
				</div>

				{/* Recent Announcements */}
				<Card>
					<CardHeader>
						<CardTitle className="text-base">
							Recent Announcements
						</CardTitle>
					</CardHeader>
					<CardContent className="divide-y">
						{announcements.slice(0, 3).map((a) => (
							<div
								key={a.id}
								className="py-3 flex items-center justify-between"
							>
								<div>
									<p className="text-sm font-medium text-slate-800">
										{a.title}
									</p>
									<p className="text-xs text-slate-400 mt-0.5">
										{a.date}
									</p>
								</div>
								<div className="flex gap-2">
									{a.urgent && (
										<Badge variant="destructive">
											Urgent
										</Badge>
									)}
									<Badge variant="secondary">
										{a.category}
									</Badge>
								</div>
							</div>
						))}
					</CardContent>
				</Card>
			</div>
		</>
	)
}

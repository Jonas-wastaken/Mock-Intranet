import TopBar from '@/components/TopBar'
import { Badge } from '@/components/ui/badge'
import { tickets } from '@/lib/mock-data'

const priorityColor: Record<string, string> = {
	High: 'destructive',
	Medium: 'secondary',
	Low: 'outline',
}
const statusColor: Record<string, string> = {
	Open: 'bg-yellow-100 text-yellow-800',
	'In Progress': 'bg-blue-100 text-blue-800',
	Resolved: 'bg-green-100 text-green-800',
}

export default function HelpdeskPage() {
	return (
		<>
			<TopBar title="IT Helpdesk" />
			<div className="p-6">
				<table className="w-full text-sm bg-white border rounded-xl overflow-hidden">
					<thead className="bg-slate-100 text-slate-500 uppercase text-xs">
						<tr>
							{[
								'#',
								'Subject',
								'Status',
								'Priority',
								'Requested by',
							].map((h) => (
								<th key={h} className="px-4 py-3 text-left">
									{h}
								</th>
							))}
						</tr>
					</thead>
					<tbody className="divide-y">
						{tickets.map((t) => (
							<tr key={t.id} className="hover:bg-slate-50">
								<td className="px-4 py-3 text-slate-400">
									{t.id}
								</td>
								<td className="px-4 py-3 font-medium text-slate-800">
									{t.subject}
								</td>
								<td className="px-4 py-3">
									<span
										className={`px-2 py-1 rounded-full text-xs font-medium ${statusColor[t.status]}`}
									>
										{t.status}
									</span>
								</td>
								<td className="px-4 py-3">
									<Badge
										variant={
											// eslint-disable-next-line @typescript-eslint/no-explicit-any
											priorityColor[t.priority] as any
										}
									>
										{t.priority}
									</Badge>
								</td>
								<td className="px-4 py-3 text-slate-500">
									{t.owner}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</>
	)
}

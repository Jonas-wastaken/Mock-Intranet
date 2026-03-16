export const employees = [
	{
		id: 1,
		name: 'Anna Müller',
		dept: 'Engineering',
		role: 'Senior Dev',
		email: 'a.mueller@corp.de',
		avatar: 'AM',
	},
	{
		id: 2,
		name: 'Thomas Becker',
		dept: 'HR',
		role: 'HR Manager',
		email: 't.becker@corp.de',
		avatar: 'TB',
	},
	{
		id: 3,
		name: 'Sara Khan',
		dept: 'Marketing',
		role: 'Brand Lead',
		email: 's.khan@corp.de',
		avatar: 'SK',
	},
	{
		id: 4,
		name: 'Lukas Fischer',
		dept: 'Finance',
		role: 'Analyst',
		email: 'l.fischer@corp.de',
		avatar: 'LF',
	},
	{
		id: 5,
		name: 'Maria Rossi',
		dept: 'Engineering',
		role: 'DevOps',
		email: 'm.rossi@corp.de',
		avatar: 'MR',
	},
]

export const announcements = [
	{
		id: 1,
		title: 'Office closed on April 18th (Good Friday)',
		date: '2026-03-15',
		category: 'Holiday',
		urgent: false,
	},
	{
		id: 2,
		title: 'New VPN policy effective April 1st – action required',
		date: '2026-03-14',
		category: 'IT',
		urgent: true,
	},
	{
		id: 3,
		title: 'Q1 All-Hands meeting scheduled for March 27th',
		date: '2026-03-12',
		category: 'Company',
		urgent: false,
	},
	{
		id: 4,
		title: 'Canteen menu updated – new vegan options available',
		date: '2026-03-10',
		category: 'Facilities',
		urgent: false,
	},
]

export const tickets = [
	{
		id: 101,
		subject: 'Laptop not connecting to docking station',
		status: 'Open',
		priority: 'High',
		owner: 'Anna Müller',
	},
	{
		id: 102,
		subject: 'Need access to SharePoint Finance folder',
		status: 'In Progress',
		priority: 'Medium',
		owner: 'Lukas Fischer',
	},
	{
		id: 103,
		subject: 'Email signature not rendering correctly in Outlook',
		status: 'Resolved',
		priority: 'Low',
		owner: 'Sara Khan',
	},
]

export const stats = [
	{ label: 'Employees', value: 248 },
	{ label: 'Open IT Tickets', value: 12 },
	{ label: 'Announcements This Month', value: 7 },
	{ label: 'Upcoming Holidays', value: 3 },
]

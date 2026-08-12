export interface ExperienceEntry {
	role: string;
	org: string;
	orgUrl?: string;
	/** "YYYY-MM" */
	start: string;
	/** "YYYY-MM"; omit for "Present" */
	end?: string;
	summary: string;
	highlights?: string[];
	tech?: string[];
}

// TODO: replace these placeholder entries with your real roles.
export const experience: ExperienceEntry[] = [
	{
		role: 'Hackathon Team Member',
		org: 'H4CKIT NewGen',
		orgUrl: 'https://github.com/H4CKIT-NewGen',
		start: '2025-06',
		end: '2025-06',
		summary:
			'Built the Health Service Locator — an offline-accessible health facility finder for Kenyan citizens.',
		highlights: [
			'TODO: replace with real details about your role on the team',
			'Integrated Google Maps API with Africa’s Talking USSD and SMS APIs',
		],
		tech: ['Node.js', 'USSD', 'SMS APIs'],
	},
	{
		role: 'Freelance / Personal Projects',
		org: 'Self-directed',
		start: '2025-01',
		summary:
			'Designed and shipped web tools end-to-end, from a hotel reservation system to a water-delivery marketplace.',
		highlights: [
			'TODO: replace with real details (clients, coursework, outcomes)',
			'Built payment processing, in-app messaging, and rating features in Django',
		],
		tech: ['Django', 'Python', 'FastAPI'],
	},
];

export const education: ExperienceEntry[] = [
	{
		role: 'BSc Computer Science',
		org: 'University of Nairobi',
		orgUrl: 'https://www.uonbi.ac.ke/',
		start: '2023-09',
		summary:
			'Coursework spanning math, business, networks, software development, and artificial intelligence.',
		highlights: ['TODO: replace start date and add notable coursework or achievements'],
	},
];

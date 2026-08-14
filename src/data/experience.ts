export interface Highlight {
	text: string;
	/** Credit a collaborator: their name renders as a link after the text. */
	attribution?: { name: string; url: string };
	/** Optional link appended after the text, e.g. to a project repo. */
	link?: { label: string; url: string };
}

export interface ExperienceEntry {
	role: string;
	org: string;
	orgUrl?: string;
	/** "YYYY-MM" */
	start: string;
	/** "YYYY-MM"; omit for "Present" */
	end?: string;
	summary: string;
	highlights?: (string | Highlight)[];
	tech?: string[];
}

export const experience: ExperienceEntry[] = [
	{
		role: 'Data Engineering Intern',
		org: 'Data XL',
		orgUrl: 'https://www.data-xl.africa/en/',
		start: '2026-07',
		summary:
			'Building data and ML infrastructure at a Nairobi data-engineering firm that delivers complex data systems across Africa.',
		highlights: [
			'Developed a machine learning pipeline that scores 200,000+ leads daily — a logistic-regression model with continual learning, so scores stay accurate as new outcome data arrives without manual retraining',
			'Decoupled the client onboarding application from heavy text-extraction work by deploying a cloud message queue — extraction requests now process asynchronously instead of blocking the app while new members are registered',
			"Built a FastAPI service exposing chat, vision, and voice capabilities against Scaleway's generative AI models, giving internal products a single API for AI features",
		],
		tech: ['Python', 'FastAPI', 'Machine Learning', 'Message Queues', 'Scaleway'],
	},
	{
		role: 'Hackathon Team Member',
		org: 'H4CKIT NewGen',
		orgUrl: 'https://github.com/H4CKIT-NewGen',
		start: '2025-06',
		end: '2025-06',
		summary:
			'Built the Health Service Locator — an offline-accessible health facility finder for Kenyan citizens.',
		highlights: [
			'Built a USSD backend using Node.js to manage stateful user sessions, allowing offline users to navigate multi-level menus to locate healthcare services',
			{
				text: 'Engineered a geolocation routing algorithm that queried the Google Maps API to return the top 5 nearest health facilities within a 10km radius',
				attribution: {
					name: 'Mozart Moguche',
					url: 'https://www.linkedin.com/in/mozart-moguche-46b0712a8/',
				},
			},
		],
		tech: ['Node.js', 'USSD', 'SMS APIs'],
	},
];

export const education: ExperienceEntry[] = [
	{
		role: 'Bachelor of Science in Computer Science',
		org: 'University of Nairobi',
		orgUrl: 'https://www.uonbi.ac.ke/',
		start: '2023-09',
		end: '2027 (expected)',
		summary:
			'Coursework spanning math, business, networks, software development, and artificial intelligence.',
		highlights: [
			'Relevant courses: Software Engineering, Machine Learning Algorithms & Programming, Artificial Intelligence Applications, Computer Network Security, Embedded Systems & Mobile Programming',
			{
				text: 'Built an end-to-end business intelligence pipeline on Kenyan soil-health trial data for the Business Intelligence & Analytics course — a galaxy-schema data warehouse with OLAP querying, an interactive Streamlit dashboard, and data-mining workflows',
				link: { label: 'view on GitHub', url: 'https://github.com/georgemark1024/data-warehouse' },
			},
			'Member, Rotaract Club of University of Nairobi — contributing to The Rotary Fund in support of community development and humanitarian work, and networking with local community leaders through regular club sessions and team-building exercises',
		],
	},
];

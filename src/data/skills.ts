export interface SkillGroup {
	label: string;
	items: string[];
}

export const skillGroups: SkillGroup[] = [
	{
		label: 'Languages',
		items: ['Python', 'JavaScript', 'SQL', 'HTML & CSS'],
	},
	{
		label: 'Frameworks',
		items: ['Django', "Flask",  'FastAPI', 'Node.js', 'Astro'],
	},
	{
		label: 'Tools & APIs',
		items: ['Git & GitHub', 'Linux', "PostgreSQL"],
	},
];

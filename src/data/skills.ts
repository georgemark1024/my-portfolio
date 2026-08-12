export interface SkillGroup {
	label: string;
	items: string[];
}

export const skillGroups: SkillGroup[] = [
	{
		label: 'Languages',
		items: ['Python', 'JavaScript', 'TypeScript', 'SQL', 'HTML & CSS'],
	},
	{
		label: 'Frameworks',
		items: ['Django', 'FastAPI', 'Node.js', 'Astro'],
	},
	{
		label: 'Tools & APIs',
		items: ['Git', 'Linux', "Africa's Talking", 'Google Maps API'],
	},
];

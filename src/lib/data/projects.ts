export type ProjectCategory = 'product' | 'oss' | 'experiment';

export type Project = {
	slug: string;
	title: string;
	short: string;
	description: string;
	stack: string[];
	category: ProjectCategory;
	image: string;
	imageAlt: string;
	demoUrl: string;
	repoUrl: string;
	highlight?: string;
};

export const projects: Project[] = [
	{
		slug: 'signal-board',
		title: 'Signal Board',
		short: 'Realtime surface for distributed telemetry.',
		description:
			'A dense-but-readable dashboard that keeps 60fps while streaming hundreds of points per second. Virtualized lists, incremental layout, and deliberate motion for state changes.',
		stack: ['SvelteKit', 'TypeScript', 'WebSockets', 'Tailwind'],
		category: 'product',
		image: '/projects/signal-board.svg',
		imageAlt: 'Abstract dashboard UI with charts and glowing grid lines',
		demoUrl: 'https://kit.svelte.dev',
		repoUrl: 'https://github.com/sveltejs/kit',
		highlight: 'Perf-first data viz'
	},
	{
		slug: 'orbit-docs',
		title: 'Orbit Docs',
		short: 'Docs that feel like a product, not a pamphlet.',
		description:
			'Search-first documentation with keyboard flows, deep links, and interactive snippets. Built to onboard engineers in minutes, not meetings.',
		stack: ['Svelte', 'MDsvex', 'Algolia', 'Vite'],
		category: 'product',
		image: '/projects/orbit-docs.svg',
		imageAlt: 'Documentation layout with sidebar and code sample',
		demoUrl: 'https://svelte.dev/docs',
		repoUrl: 'https://github.com/sveltejs/svelte.dev',
		highlight: 'Keyboard-native UX'
	},
	{
		slug: 'prism-ui',
		title: 'Prism UI Kit',
		short: 'Headless primitives with opinionated motion.',
		description:
			'Composable components with focus management baked in. Tokens for density, elevation, and timing so every screen feels related.',
		stack: ['Svelte 5', 'ARIA patterns', 'CSS variables'],
		category: 'oss',
		image: '/projects/prism-ui.svg',
		imageAlt: 'Component library tiles in a futuristic grid',
		demoUrl: 'https://svelte.dev/tutorial',
		repoUrl: 'https://github.com/sveltejs/svelte',
		highlight: 'OSS component kit'
	},
	{
		slug: 'lumen-lab',
		title: 'Lumen Lab',
		short: 'Shader playground for marketing heroes.',
		description:
			'WebGL-backed hero experiments with graceful degradation: static art direction when `prefers-reduced-motion` is on or WebGL fails.',
		stack: ['WebGL', 'Three.js', 'SvelteKit'],
		category: 'experiment',
		image: '/projects/lumen-lab.svg',
		imageAlt: 'Gradient light beams across a dark canvas',
		demoUrl: 'https://threejs.org/examples/',
		repoUrl: 'https://github.com/mrdoob/three.js',
		highlight: 'Creative WebGL'
	}
];

export const projectCategories: { id: ProjectCategory | 'all'; label: string }[] = [
	{ id: 'all', label: 'All' },
	{ id: 'product', label: 'Product' },
	{ id: 'oss', label: 'Open Source' },
	{ id: 'experiment', label: 'Labs' }
];

export function getProjectBySlug(slug: string): Project | undefined {
	return projects.find((p) => p.slug === slug);
}

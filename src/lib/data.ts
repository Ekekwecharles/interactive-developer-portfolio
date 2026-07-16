type SocialIcon = 'github' | 'linkedin' | 'x';

type Social = {
	label: string;
	href: string;
	icon: SocialIcon;
};

type Education = {
	school: string;
	degree: string;
	period: string;
	details?: string;
};

type Experience = {
	role: string;
	company: string;
	period: string;
	points: string[];
};

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
	liveUrl: string;
	githubUrl: string;
	highlight?: string;
};

export type Data = {
	profile: {
		name: string;
		role: string;
		tagline: string;
		intro: string;
		email: string;
		socials: Social[];
		summary: string;
	};

	skills: {
		frontend: string[];
		backend: string[];
		tools: string[];
		languages: string[];
		aiWorkflow: string[];
	};

	experience: Experience[];

	education: Education[];

	projects: Project[];

	interests: string[];

	bookCallLink: string;

	accentPresets: readonly string[];
};

export const DATA = {
	profile: {
		name: 'Ekekwe Charles',
		role: 'Full-Stack Engineer (Frontend-leaning)',
		tagline:
			'Building scalable, interactive web interfaces with React, Vue, Svelte, and modern web tools.',
		intro:
			'I design and build product-grade web experiences: crisp interactions, accessible defaults, and bundles that stay fast on real devices.',
		email: 'ekekwecharles50@gmail.com',
		socials: [
			{
				label: 'GitHub',
				href: 'https://github.com/Ekekwecharles?tab=repositories',
				icon: 'github'
			},
			{
				label: 'LinkedIn',
				href: 'https://www.linkedin.com/in/xharlessnow/',
				icon: 'linkedin'
			},
			{ label: 'X', href: 'https://x.com/xharlessnow', icon: 'x' }
		],
		summary:
			'Full-Stack Engineer focused on building high-performance, scalable web applications and modern UI systems. Experienced with React, Next.js, TypeScript, Node.js, and serverless architectures, with expanding expertise in Vue, Svelte, and design systems like shadcn/ui. Strong systems thinking background from Electrical Engineering and intensive training from ALX Africa and HNG Internship. Highly adaptable, production-ready engineer who learns new stacks quickly and delivers under pressure using modern AI-assisted development tools.'
	},

	skills: {
		frontend: [
			'React',
			'Next.js',
			'TypeScript',
			'Vue.js',
			'Svelte',
			'Tailwind CSS',
			'Redux Toolkit',
			'React Query',
			'Styled Components',
			'shadcn/ui',
			'Framer Motion',
			'Lottie'
		],

		backend: [
			'Node.js',
			'Next.js API Routes (Serverless)',
			'REST APIs',
			'Supabase',
			'Firebase',
			'NextAuth.js',
			'MongoDB'
		],

		tools: [
			'Git/GitHub',
			'CI/CD basics',
			'Socket.IO',
			'Performance Optimization',
			'Responsive Design',
			'Accessibility',
			'Data Visualization (Recharts, ECharts)'
		],

		languages: ['JavaScript', 'TypeScript', 'Python', 'SQL', 'HTML', 'CSS'],

		aiWorkflow: [
			'ChatGPT',
			'Cursor',
			'GitHub Copilot',
			'AI-assisted debugging',
			'Rapid stack learning',
			'Code refactoring with AI'
		]
	},

	experience: [
		{
			role: 'Software Engineer (Finalist)',
			company: 'HNG Internship',
			period: '2026',
			points: [
				'Completed the HNG Software Engineering Internship and graduated as a Finalist',
				'Built and shipped production-level applications under strict deadlines and real-world constraints',
				'Collaborated in fast-paced, remote engineering teams using Git-based workflows',
				'Strengthened skills in full-stack development, API integration, and deployment workflows',
				'Delivered solutions under pressure while maintaining code quality and performance standards'
			]
		},

		{
			role: 'Full-Stack / Frontend Engineer',
			company: 'Upwork',
			period: 'Jan 2023 – Present',
			points: [
				'Delivered production-ready web applications for international clients',
				'Integrated REST APIs, authentication systems, and payment workflows',
				'Built scalable UI components with strong focus on performance and accessibility',
				'Worked directly with clients in fast-paced, remote environments'
			]
		},

		{
			role: 'Frontend Engineer & Mentor',
			company: 'ALX Africa',
			period: 'Dec 2022 – Nov 2024',
			points: [
				'Built production-grade applications and real-world clones in agile teams',
				'Mentored junior developers in full-stack development and Git workflows',
				'Conducted code reviews and supported deployment pipelines',
				'Collaborated on scalable frontend architecture using React ecosystems'
			]
		},

		{
			role: 'Lead Engineer & Operations Manager',
			company: 'Snoware Gadgets & Partner Shops',
			period: 'Jun 2015 – Present',
			points: [
				'Led technical operations in device diagnostics and repair services',
				'Managed and trained junior technicians to improve efficiency',
				'Oversaw sales, customer support, and vendor relationships',
				'Drove business operations and growth as lead manager'
			]
		}
	],

	education: [
		{
			school: 'Federal University of Technology, Owerri (FUTO)',
			degree: 'B.Eng Electrical & Electronics Engineering',
			period: '2017 – 2022'
		},

		{
			school: 'ALX Africa',
			degree: 'Software Engineering Program',
			period: '2022 – 2024',
			details: 'C, Bash, Linux, Python, Flask, Django, JavaScript, React, systems programming'
		},

		{
			school: 'HNG Internship',
			degree: 'Software Engineering Internship',
			period: 'Intensive Program',
			details:
				'Real-world, production-level engineering under tight deadlines with collaborative teams'
		}
	],

	projects: [
		{
			slug: 'redline-type-racer',
			title: 'REDLINE',
			short: 'Type fast. Drive furious.',
			description:
				'A Solo/Mutiplayer typing-speed racing game where WPM is the throttle — every correct keystroke pushes your vehicle forward, and every mistake sends it backward by a configurable penalty. Features a car garage with unlockable vehicles, adjustable difficulty and race-length settings, XP/leveling progression, and real cross-device multiplayer via Pusher presence channels. Supports guest play against AI with zero friction, or account-based play with persisted stats, achievements, and race history.',
			stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'MongoDB', 'Prisma', 'NextAuth', 'Pusher'],
			category: 'product',
			image: '/projects/redline.png',
			imageAlt: 'REDLINE typing race game with car garage and live race track',
			liveUrl: 'https://redline-type-racer.vercel.app/',
			githubUrl: 'https://github.com/Ekekwecharles/Redline-Type-Racer',
			highlight: 'Typing-speed racing game'
		},
		{
			slug: 'end-2-end-encrypted-chat-app',
			title: 'End-to-End Encrypted Chat App',
			short: 'Secure realtime chat with encryption.',
			description:
				'A secure end-to-end encrypted messaging system that ensures all messages are encrypted on the client before being sent and can only be decrypted by the intended recipient. It implements secure key generation and management, client-side encryption/decryption using the Web Crypto API, and a backend that stores only ciphertext without ever accessing plaintext data.',
			stack: ['Next.js', 'TypeScript', 'WebSocket', 'WebCrypto'],
			category: 'oss',
			image: '/projects/chat-app.png',
			imageAlt: 'Chat interface with encrypted message flow',
			liveUrl: 'https://end-2-end-encryption-chat-app.vercel.app/login',
			githubUrl: 'https://github.com/Ekekwecharles/End-2-End-Encryption-Chat-app',
			highlight: 'Encrypted realtime chat'
		},

		{
			slug: 'real-time-data-visualization-platform',
			title: 'Real-Time Data Visualization Platform',
			short: 'Live analytics dashboard with streaming data.',
			description:
				'A high-performance real-time analytics dashboard that visualizes streaming data using interactive charts, live-updating metrics, and dynamic activity feeds. The platform simulates production-grade monitoring systems such as trading, DevOps, and telemetry dashboards, with optimized rendering, modular architecture, and smooth real-time updates.',
			stack: ['Vue', 'WebSocket', 'ECharts', 'TypeScript'],
			category: 'product',
			image: '/projects/data-viz.png',
			imageAlt: 'Dashboard with live charts and metrics',
			liveUrl: 'https://data-visualization-platform-five.vercel.app/',
			githubUrl: 'https://github.com/Ekekwecharles/Data-visualization-platform',
			highlight: 'Live analytics'
		},

		{
			slug: 'invoice-management-app',
			title: 'Invoice Management App',
			short: 'Full-stack invoice tracking system.',
			description:
				'A production-style invoice management system for creating, tracking, and managing client invoices. It supports full CRUD operations, draft saving, payment status workflows, filtering, form validation, and persistent storage, with a fully responsive UI and light/dark mode support.',
			stack: ['React', 'TypeScript', 'Next.js', 'Prisma', 'PostgreSQL'],
			category: 'product',
			image: '/projects/invoice-app.png',
			imageAlt: 'Invoice dashboard with billing tables',
			liveUrl: 'https://invoice-mangement-app-iyye.vercel.app/',
			githubUrl: 'https://github.com/Ekekwecharles/invoice-mangement-app',
			highlight: 'Smart invoice tracking'
		},

		{
			slug: 'habit-tracker-app',
			title: 'Habit Tracker App',
			short: 'Mobile-first habit tracking PWA.',
			description:
				'Mobile-first Progressive Web App for tracking habits. It includes user authentication, protected routes, and full CRUD functionality for habits, along with daily completion tracking, streak calculation, and local data persistence. The app also supports basic PWA features like installability and offline access.',
			stack: ['Next.js', 'TypeScript', 'MongoDB', 'Socket.IO'],
			category: 'product',
			image: '/projects/habit-tracker.png',
			imageAlt: 'Mobile habit tracking dashboard',
			liveUrl: 'https://habit-tracker-app-seven-plum.vercel.app/',
			githubUrl: 'https://github.com/Ekekwecharles/Habit-Tracker-App',
			highlight: 'PWA habit tracking'
		},

		{
			slug: 'ai-page-summarizer-extension',
			title: 'AI Page Summarizer Extension',
			short: 'Chrome extension that summarizes web pages.',
			description:
				'Manifest V3 extension that extracts readable text from the active tab, sends it to a Node.js proxy, and shows a structured summary in the popup. OpenAI is called first; if that fails, Gemini is used automatically.',
			stack: ['React', 'TypeScript', 'Node.js', 'WebExtensions API'],
			category: 'experiment',
			image: '/projects/ai-summarizer.png',
			imageAlt: 'Browser extension popup showing summary',
			liveUrl: 'https://github.com/Ekekwecharles/AI-Page-Summarizer',
			githubUrl: 'https://github.com/Ekekwecharles/AI-Page-Summarizer',
			highlight: 'AI summarization tool'
		},

		{
			slug: 'meetmind',
			title: 'MeetMind',
			short: 'AI meeting agent SDK for live interviews and calls.',
			description:
				'MeetMind is an AI-powered meeting and interview agent platform that embeds a context-aware AI participant directly into live Zoom and Google Meet sessions. Unlike passive transcription tools, the agent joins as a visible named participant — pre-loaded with session context such as job descriptions, candidate CVs, and scoring criteria — and actively speaks, asks follow-up questions, and captures structured notes throughout the session. Users configure agent behavior, review post-session summaries and interview scorecards, and query the full conversation record in natural language via an "Ask Mind" feature.',
			stack: [
				'Next.js',
				'React',
				'TypeScript',
				'Tailwind CSS',
				'TanStack Query',
				'TanStack Table',
				'LiveKit',
				'Vercel AI SDK',
				'Zustand',
				'Zod'
			],
			category: 'product',
			image: '/projects/meetmind.png',
			imageAlt: 'MeetMind AI interview agent dashboard',
			liveUrl: 'https://meetmind.hng14.com/',
			githubUrl: 'https://github.com/hngprojects/meetmind-ui',
			highlight: 'AI interview agent'
		},

		{
			slug: 'snowbank',
			title: 'SnowBank',
			short: 'Full-stack digital banking platform.',
			description:
				'A production-grade digital banking web application featuring user authentication, account management, fund transfers, transaction history, and spending analytics. Built with a focus on security and user experience, it includes email notifications via Resend, interactive financial charts, animated UI transitions, and a fully responsive design across all devices.',
			stack: [
				'Next.js',
				'TypeScript',
				'Tailwind CSS',
				'MongoDB',
				'Prisma',
				'NextAuth',
				'TanStack Query',
				'Recharts',
				'Framer Motion',
				'Resend'
			],
			category: 'product',
			image: '/projects/snowbank.png',
			imageAlt: 'SnowBank digital banking dashboard',
			liveUrl: 'https://snow-bank.vercel.app/',
			githubUrl: 'https://github.com/Ekekwecharles/SnowBank',
			highlight: 'Digital banking platform'
		},

		{
			slug: 'audiophile',
			title: 'Audiophile',
			short: 'Full-stack e-commerce store for premium audio gear.',
			description:
				'A full-stack e-commerce storefront for premium audio equipment — headphones, speakers, and earphones — built with Next.js and Convex. Users can browse products by category, view dynamic product detail pages with features and specs, manage a persistent shopping cart, and complete a full checkout flow with form validation and order confirmation. Order confirmation emails are sent via Resend/Nodemailer, with product and site content managed through a Convex backend.',
			stack: [
				'Next.js',
				'React',
				'TypeScript',
				'Tailwind CSS',
				'Convex',
				'React Hook Form',
				'Resend'
			],
			category: 'product',
			image: '/projects/audiophile.png',
			imageAlt: 'Audiophile e-commerce storefront with product listings and checkout',
			liveUrl: 'https://audiophile-one-xi.vercel.app/',
			githubUrl: 'https://github.com/Ekekwecharles/audiophile',
			highlight: 'E-commerce audio storefront'
		}
	],

	interests: [
		'Frontend architecture',
		'UI/UX systems',
		'Design systems',
		'Animations & micro-interactions',
		'Performance optimization',
		'Hackathons',
		'Electronics repair',
		'Fitness',
		'Skating',
		'Continuous learning'
	],

	bookCallLink: 'https://cal.com/xharlessnow',
	accentPresets: ['cyan', 'violet', 'amber', 'emerald'] as const
} satisfies Data;

export type AccentPreset = (typeof DATA.accentPresets)[number];

export const projectCategories: { id: ProjectCategory | 'all'; label: string }[] = [
	{ id: 'all', label: 'All' },
	{ id: 'product', label: 'Product' },
	{ id: 'oss', label: 'Open Source' },
	{ id: 'experiment', label: 'Labs' }
];

export function getProjectBySlug(slug: string): Project | undefined {
	return DATA.projects.find((p) => p.slug === slug);
}

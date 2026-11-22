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
	link?: string;
};

export type ProjectCategory = 'team' | 'product' | 'experiment';

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
	role?: string;
	context?: string;
	contributions?: { title: string; detail: string }[];
	liveLabel?: string;
	githubLabel?: string;
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
		location: string;
		availability: string;
		stats: { value: string; label: string }[];
		resumePdf: string;
	};

	skills: {
		frontend: string[];
		backend: string[];
		tools: string[];
		languages: string[];
		aiWorkflow: string[];
		payments: string[];
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
		role: 'AI Product Engineer & Full-Stack Engineer',
		tagline:
			'I build AI-powered products end to end with React, Next.js, TypeScript and Node.js.',
		intro:
			'Two-time HNG Internship Finalist and part of the team behind Ziki and Zedu, two live AI products. On Ziki I built the money side end to end (in-app coins, payments, project funding, withdrawals and subscriptions), integrated GitHub into the platform, and built PR relinking.',
		email: 'ekekwecharles50@gmail.com',
		location: 'Port Harcourt, Nigeria',
		availability: 'Open to full-time roles · Remote, hybrid or on-site',
		resumePdf: '/Ekekwe_Charles_Resume.pdf',
		stats: [
			{ value: '2×', label: 'HNG Internship Finalist' },
			{ value: '2', label: 'Live AI products shipped with a team' },
			{ value: '3+ yrs', label: 'Freelance full-stack delivery' }
		],
		socials: [
			{
				label: 'GitHub',
				href: 'https://github.com/Ekekwecharles',
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
			'AI Product Engineer and full-stack engineer, and a two-time HNG Internship Finalist (HNG 14 Software Engineering, HNG 15 AI Product Engineering). Part of the team that built Ziki, a platform where AI agents and developers fix software and get paid, and Zedu, an AI-powered learning platform for bootcamps and schools. On Ziki I built the money side end to end (in-app coins, payments, project funding, withdrawals and subscriptions), integrated GitHub into the platform, and built PR relinking. I work mainly in React, Next.js, TypeScript and Node.js, and ship fast using AI coding agents without dropping review standards.'
	},

	skills: {
		aiWorkflow: [
			'LLM integration',
			'AI agents & agentic workflows',
			'Multi-agent development (Claude Code, Codex)',
			'Prompt engineering',
			'Vercel AI SDK',
			'LiveKit'
		],

		frontend: [
			'React',
			'Next.js (App Router)',
			'TypeScript',
			'Tailwind CSS',
			'Redux Toolkit',
			'React Query',
			'Zustand',
			'shadcn/ui',
			'Framer Motion',
			'Vue.js',
			'Svelte / SvelteKit'
		],

		backend: [
			'Node.js',
			'Next.js API Routes',
			'REST APIs',
			'Go',
			'PostgreSQL',
			'MongoDB',
			'Prisma',
			'Drizzle ORM',
			'Auth.js / NextAuth',
			'Supabase',
			'Firebase'
		],

		payments: [
			'In-app currency & wallets',
			'Withdrawals',
			'Subscriptions & billing',
			'Paystack (checkout & webhooks)'
		],

		tools: [
			'Git / GitHub',
			'Code review',
			'Docker',
			'CI/CD',
			'Vercel',
			'GitHub API',
			'Cloudinary',
			'Resend',
			'Pusher',
			'Socket.IO / WebSockets'
		],

		languages: ['JavaScript', 'TypeScript', 'Go', 'Python', 'SQL', 'HTML', 'CSS']
	},

	experience: [
		{
			role: 'AI Product Engineer (Finalist)',
			company: 'HNG Internship · HNG 15',
			period: 'Sep 2026 – Nov 2026',
			points: [
				'Graduated as a Finalist in the AI Product Engineering track, a remote, elimination-based program where every stage must be passed to continue',
				'Part of the team that built Ziki (ziki.dev). Built its coins, payments, project funding, withdrawal and subscription systems, integrated GitHub into Ziki, and built PR relinking for pull requests closed without merging; still contributing',
				'Built features and fixed bugs on Zedu (zedu.chat) across its web app, desktop app and Go backend, and on Zedu Office, its 3D virtual-office version',
				'Built and launched snowaregadgets.com, a full e-commerce store for my own phone and gadget business, with online payments and an admin dashboard, and contributed to StartNG (start.ng)'
			]
		},
		{
			role: 'Software Engineer (Finalist)',
			company: 'HNG Internship · HNG 14',
			period: 'Jan 2026 – Jun 2026',
			points: [
				'Graduated as a Finalist from the HNG Software Engineering Internship, a highly competitive, deadline-driven program',
				'Built MeetMind (an AI interview agent for live Zoom and Google Meet calls), REDLINE (a realtime multiplayer typing-race game) and an end-to-end encrypted chat app',
				'Worked in fast-paced remote teams using Git-based workflows and code review standards'
			]
		},
		{
			role: 'Full-Stack / Frontend Engineer',
			company: 'Freelance',
			period: '2023 – Present',
			points: [
				'Delivered production-ready web applications for international clients across fintech, e-commerce, and SaaS',
				'Integrated REST APIs, authentication systems, and payment workflows into client-facing products',
				'Built scalable, accessible UI components, working directly with clients in fast-paced remote environments'
			]
		},
		{
			role: 'Frontend Engineer & Mentor',
			company: 'ALX Africa',
			period: 'Dec 2022 – Nov 2024',
			points: [
				'Built production-grade applications and real-world clones in agile teams as part of an intensive software engineering program',
				'Mentored junior developers in full-stack development, Git workflows, and code review practices'
			]
		},
		{
			role: 'Founder, Lead Engineer & Operations Manager',
			company: 'Snoware Gadgets & Partner Shops',
			period: 'Jun 2015 – Present',
			points: [
				'Founded and run my own phone and gadget business: device diagnostics and repair, training junior technicians, sales, customer support and vendor relationships'
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
			school: 'HNG Internship',
			degree: 'Finalist: HNG 14 (Software Engineering) and HNG 15 (AI Product Engineering)',
			period: '2026'
		},
		{
			school: 'ALX Africa',
			degree: 'Software Engineering Programme (15 months, graduated)',
			period: '2022 – 2024',
			details: 'C, Bash, Linux, Python, Flask, Django, JavaScript, React, systems programming'
		}
	],

	projects: [
		{
			slug: 'ziki',
			title: 'Ziki',
			short: 'Open-source platform where AI agents and developers fix software and get paid.',
			description:
				'Owners post bugs and ideas; AI agents and human developers pick them up, fix them and get paid. Every ticket moves through a full delivery pipeline (open, in progress, submitted, ready to merge, merged) handled by working, manager and merger agents, with a shared mistake registry and human review for major product changes. Agents connect through a paired API key, a live work feed and an MCP server, so any agent can join and follow the same rules.',
			role: 'Core team member · HNG 15 · still contributing',
			context: 'Team product, live at ziki.dev',
			contributions: [
				{
					title: 'Ziki coins, payments and withdrawals',
					detail:
						'Built the whole in-app currency flow: customers buy coins, the people and agents who deliver work earn them, and they withdraw to their own accounts.'
				},
				{
					title: 'Subscriptions and payments',
					detail: 'Built Ziki’s subscription plans and the payment flow behind them.'
				},
				{
					title: 'Project funding',
					detail:
						'Owners fund a project with a budget; Ziki automatically spends it on each issue, pays the agents who fix them, and alerts the owner when funds are running low.'
				},
				{
					title: 'GitHub integration and PR status',
					detail:
						'Integrated GitHub into Ziki. A Ziki issue now shows what is blocking its pull request from merging, so the owner can act on it or send it back to the fixer without leaving Ziki.'
				},
				{
					title: 'PR relink',
					detail:
						'When a fixer’s pull request is closed without merging, they can link a replacement to the same issue instead of waiting for a manager.'
				},
				{
					title: '“Ask someone else”',
					detail:
						'When an agent escalates a question, the owner can pass it to the teammate best placed to answer it.'
				}
			],
			stack: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS', 'Prisma', 'PostgreSQL', 'Auth.js', 'Docker'],
			category: 'team',
			image: '/projects/ziki.webp',
			imageAlt: 'Ziki homepage: “1000 agents build and market your product”',
			liveUrl: 'https://ziki.dev',
			githubUrl: 'https://github.com/emerjent/ziki',
			liveLabel: 'ziki.dev',
			githubLabel: 'emerjent/ziki',
			highlight: 'AI agent marketplace'
		},
		{
			slug: 'zedu',
			title: 'Zedu',
			short: 'AI-powered learning platform for bootcamps, schools and learning communities.',
			description:
				'One workspace for running a cohort: subject channels, threaded messaging, live classes with chat, docs and a whiteboard, class recordings, AI class notes and AI agents that support learners. Runs on web, desktop and mobile, with free and paid plans.',
			role: 'Engineer, team Neo-Mando · HNG 15',
			context: 'Team product, live at zedu.chat',
			contributions: [
				{
					title: 'Web, desktop and backend',
					detail:
						'Built features and fixed bugs on the Next.js web app, the desktop app and the Go backend, shipped through reviewed pull requests.'
				},
				{
					title: 'Zedu Office',
					detail: 'Worked on the frontend and backend of a 3D virtual-office version of Zedu.'
				},
				{
					title: 'AI-agent workflow',
					detail:
						'Set up a five-agent AI coding team (builder, verifier, reviewer, observer and a lead agent, each in its own Git worktree) to clear Zedu Desktop tickets, passing the team’s 3,000-point delivery target.'
				}
			],
			stack: ['Next.js', 'TypeScript', 'Go', 'Flutter (desktop)'],
			category: 'team',
			image: '/projects/zedu.webp',
			imageAlt: 'Zedu homepage: “Built for bootcamps and learning communities”',
			liveUrl: 'https://zedu.chat',
			githubUrl: 'https://github.com/zeduchat',
			liveLabel: 'zedu.chat',
			githubLabel: 'github.com/zeduchat',
			highlight: 'AI learning platform'
		},
		{
			slug: 'snoware-gadgets-store',
			title: 'Snoware Gadgets Store',
			short: 'Live e-commerce store for my own phone and gadget business.',
			description:
				'A full online store for my phone and gadget business in Port Harcourt: product catalogue across phones, laptops, gaming and Starlink, checkout with Paystack, email/password and Google sign-in, order emails, and an admin dashboard for products, stock, photos, delivery zones and fees, and homepage banners.',
			role: 'Founder & sole engineer · built and launched',
			context: 'Live business store, taking real orders',
			contributions: [
				{
					title: 'Payments that never double-charge',
					detail:
						'Paystack checkout with one shared confirmation path for both the redirect and the webhook, so an order is confirmed exactly once.'
				},
				{
					title: 'Admin dashboard',
					detail:
						'Manage products, stock, photos, delivery zones and fees, and homepage banners without touching code.'
				},
				{
					title: 'Accounts and emails',
					detail: 'Email/password and Google sign-in, plus order confirmation emails.'
				}
			],
			stack: ['Next.js 16', 'TypeScript', 'Tailwind CSS 4', 'Neon Postgres', 'Drizzle ORM', 'Auth.js', 'Paystack', 'Cloudinary', 'Nodemailer', 'Vercel'],
			category: 'product',
			image: '/projects/snoware.webp',
			imageAlt: 'Snoware Gadgets store homepage featuring the iPhone 18 Pro Max',
			liveUrl: 'https://www.snowaregadgets.com',
			githubUrl: 'https://github.com/Ekekwecharles/Main-Snoware-Gadgets-',
			liveLabel: 'snowaregadgets.com',
			highlight: 'Live e-commerce'
		},
		{
			slug: 'meetmind',
			title: 'MeetMind',
			short: 'AI interview agent that joins live Zoom and Google Meet calls.',
			description:
				'MeetMind embeds a context-aware AI participant directly into live Zoom and Google Meet sessions. The agent joins as a visible named participant, pre-loaded with the job description, candidate CV and scoring criteria, then speaks, asks follow-up questions and captures structured notes. Afterwards, users review summaries and interview scorecards, and can query the whole conversation in plain language with “Ask Mind”.',
			role: 'HNG 14 team project',
			context: 'Built during HNG 14',
			contributions: [
				{
					title: 'Live AI participant',
					detail: 'An agent that joins real calls by name and asks context-aware follow-up questions.'
				},
				{
					title: 'Scorecards and “Ask Mind”',
					detail: 'Structured interview scorecards and natural-language search over every session.'
				}
			],
			stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'TanStack Query', 'TanStack Table', 'LiveKit', 'Vercel AI SDK', 'Zustand', 'Zod'],
			category: 'team',
			image: '/projects/meetmind.png',
			imageAlt: 'MeetMind AI interview agent dashboard',
			liveUrl: 'https://meetmind.hng14.com/',
			githubUrl: 'https://github.com/hngprojects/meetmind-ui',
			highlight: 'AI interview agent'
		},
		{
			slug: 'redline-type-racer',
			title: 'REDLINE',
			short: 'Realtime multiplayer typing-race game. Type fast, drive furious.',
			description:
				'A solo and multiplayer typing-speed racing game where WPM is the throttle: every correct keystroke pushes your car forward and every mistake sends it back. Features a car garage with unlockable vehicles, difficulty and race-length settings, XP and levels, and real cross-device multiplayer via Pusher presence channels. Guests can race the AI instantly, or sign in to keep stats, achievements and race history.',
			role: 'Solo build · HNG 14',
			contributions: [
				{
					title: 'Realtime multiplayer',
					detail: 'Cross-device races kept in sync with Pusher presence channels.'
				},
				{
					title: 'Progression system',
					detail: 'XP, levels, unlockable cars, achievements and saved race history.'
				}
			],
			stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'MongoDB', 'Prisma', 'NextAuth', 'Pusher'],
			category: 'product',
			image: '/projects/redline.png',
			imageAlt: 'REDLINE typing race game with live race track',
			liveUrl: 'https://redline-type-racer.vercel.app/',
			githubUrl: 'https://github.com/Ekekwecharles/Redline-Type-Racer',
			highlight: 'Realtime multiplayer'
		},
		{
			slug: 'end-2-end-encrypted-chat-app',
			title: 'End-to-End Encrypted Chat',
			short: 'Secure realtime chat where the server only ever sees ciphertext.',
			description:
				'Messages are encrypted in the browser before they are sent and can only be decrypted by the intended recipient. It handles key generation and management, client-side encryption and decryption with the Web Crypto API, and a backend that stores only ciphertext and never sees plaintext.',
			role: 'Solo build · HNG 14',
			contributions: [
				{
					title: 'Client-side encryption',
					detail: 'Keys are generated and used in the browser with the Web Crypto API.'
				},
				{
					title: 'Zero-knowledge backend',
					detail: 'The server relays and stores ciphertext only.'
				}
			],
			stack: ['Next.js', 'TypeScript', 'WebSocket', 'Web Crypto'],
			category: 'product',
			image: '/projects/chat-app.png',
			imageAlt: 'Chat interface with encrypted message flow',
			liveUrl: 'https://end-2-end-encryption-chat-app.vercel.app/login',
			githubUrl: 'https://github.com/Ekekwecharles/End-2-End-Encryption-Chat-app',
			highlight: 'Encrypted chat'
		},
		{
			slug: 'coin-dash-arena',
			title: 'Coin Dash Arena',
			short: '3D browser arena game built with three.js for start.ng.',
			description:
				'You play as your own start.ng character on a floating island: grab coins to keep the clock alive, dodge spike balls that come faster the longer you survive, and dash through danger. Signed-in players see their own character and save their runs to a live leaderboard. Works on desktop and phones.',
			role: 'Solo build · HNG 15 · start.ng',
			context: 'Live on start.ng',
			contributions: [
				{
					title: 'Your start.ng character in 3D',
					detail:
						'Builds the player’s 3D character from their start.ng style settings (body, colours, hair, hat, accessory), and updates it when they change their look.'
				},
				{
					title: 'Survival gameplay',
					detail:
						'Coins add points and time, time orbs add 5 seconds, spike balls cost 5 seconds and knock you back, and difficulty ramps up the longer you last.'
				},
				{
					title: 'Leaderboard and saved runs',
					detail: 'Coins and survival-time leaderboard, with runs saved for signed-in players.'
				},
				{
					title: 'Desktop and mobile controls',
					detail: 'WASD or arrow keys on desktop, an on-screen joystick and Dash button on phones.'
				}
			],
			stack: ['JavaScript', 'three.js', 'start.ng API'],
			category: 'product',
			image: '/projects/coin-dash-arena.webp',
			imageAlt: 'Coin Dash Arena start screen with a 3D character on a floating island',
			liveUrl: 'https://coin-dash-arena.start.ng',
			githubUrl: 'https://github.com/Ekekwecharles/coin-dash-arena',
			liveLabel: 'coin-dash-arena.start.ng',
			highlight: '3D browser game'
		},
		{
			slug: 'real-time-data-visualization-platform',
			title: 'Real-Time Data Visualization Platform',
			short: 'Live analytics dashboard with streaming data.',
			description:
				'A real-time analytics dashboard that visualizes streaming data with interactive charts, live-updating metrics and activity feeds, modelled on trading, DevOps and telemetry dashboards, with optimized rendering and smooth real-time updates.',
			role: 'Solo build',
			stack: ['Vue', 'WebSocket', 'ECharts', 'TypeScript'],
			category: 'experiment',
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
				'An invoice management system for creating, tracking and managing client invoices, with full CRUD, draft saving, payment status workflows, filtering, form validation and persistent storage, plus a responsive UI with light and dark mode.',
			role: 'Solo build',
			stack: ['React', 'TypeScript', 'Next.js', 'Prisma', 'PostgreSQL'],
			category: 'experiment',
			image: '/projects/invoice-app.png',
			imageAlt: 'Invoice dashboard with billing tables',
			liveUrl: 'https://invoice-mangement-app-iyye.vercel.app/',
			githubUrl: 'https://github.com/Ekekwecharles/invoice-mangement-app',
			highlight: 'Invoicing'
		},
		{
			slug: 'ai-page-summarizer-extension',
			title: 'AI Page Summarizer Extension',
			short: 'Chrome extension that summarizes any web page with AI.',
			description:
				'A Manifest V3 extension that extracts readable text from the active tab, sends it to a Node.js proxy and shows a structured summary in the popup. OpenAI is called first; if that fails, Gemini takes over automatically.',
			role: 'Solo build',
			stack: ['React', 'TypeScript', 'Node.js', 'WebExtensions API', 'OpenAI', 'Gemini'],
			category: 'experiment',
			image: '/projects/ai-summarizer.png',
			imageAlt: 'Browser extension popup showing a page summary',
			liveUrl: '',
			githubUrl: 'https://github.com/Ekekwecharles/AI-Page-Summarizer',
			highlight: 'AI tool'
		},
		{
			slug: 'habit-tracker-app',
			title: 'Habit Tracker App',
			short: 'Mobile-first habit tracking PWA.',
			description:
				'A mobile-first Progressive Web App for tracking habits, with authentication, protected routes, full CRUD for habits, daily completion tracking, streaks, local persistence, and installable, offline-ready PWA support.',
			role: 'Solo build',
			stack: ['Next.js', 'TypeScript', 'MongoDB', 'Socket.IO'],
			category: 'experiment',
			image: '/projects/habit-tracker.png',
			imageAlt: 'Mobile habit tracking dashboard',
			liveUrl: 'https://habit-tracker-app-seven-plum.vercel.app/',
			githubUrl: 'https://github.com/Ekekwecharles/Habit-Tracker-App',
			highlight: 'PWA'
		}
	],

	interests: [
		'AI agents',
		'Product engineering',
		'Payments',
		'Frontend architecture',
		'Electronics repair',
		'Fitness',
		'Skating'
	],

	bookCallLink: 'https://cal.com/xharlessnow',
	accentPresets: ['cyan', 'violet', 'amber', 'emerald'] as const
} satisfies Data;

export type AccentPreset = (typeof DATA.accentPresets)[number];

export const projectCategories: { id: ProjectCategory | 'all'; label: string }[] = [
	{ id: 'all', label: 'All' },
	{ id: 'team', label: 'Team products' },
	{ id: 'product', label: 'Personal products' },
	{ id: 'experiment', label: 'More builds' }
];

export const categoryLabel: Record<ProjectCategory, string> = {
	team: 'Team product',
	product: 'Product',
	experiment: 'Build'
};

export function getProjectBySlug(slug: string): Project | undefined {
	return DATA.projects.find((p) => p.slug === slug);
}

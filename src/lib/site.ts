/** Central copy and links — customize for your profile */
export const SITE = {
	name: 'Ekekwe Charles',
	title: 'Full-Stack Engineer (Frontend-leaning)',
	// tagline: 'Shipping immersive interfaces with Svelte, motion, and performance budgets.',
	tagline: 'Building scalable, interactive web interfaces with React, Vue, Svelte, and modern web tools.',
	intro:
		'I design and build product-grade web experiences: crisp interactions, accessible defaults, and bundles that stay fast on real devices.',
	email: 'ekekwecharles50@gmail.com',
	socials: [
		{ label: 'GitHub', href: 'https://github.com/Ekekwecharles?tab=repositories', icon: 'github' as const },
		{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/xharlessnow/', icon: 'linkedin' as const },
		{ label: 'X', href: 'https://x.com/xharlessnow', icon: 'x' as const }
	],
	schedulingUrl: 'https://cal.com',
	accentPresets: ['cyan', 'violet', 'amber', 'emerald'] as const
} as const;

export const RESUME = {
	profile: {
		name: 'Ekekwe Charles',
		role: 'Full-Stack Engineer (Frontend-leaning)',
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
			'Data Visualization (Recharts, ECharts)',
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
			details:
				'C, Bash, Linux, Python, Flask, Django, JavaScript, React, systems programming'
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
			name: 'End 2 End Encrypted Chat App',
			href: 'https://end-2-end-encryption-chat-app.vercel.app/login',
			github: 'https://github.com/your-repo',
			stack: ['Next.js', 'TypeScript', 'WebSocket', 'WebCrypto'],
			description:
				'Secure end-to-end encrypted realtime chat application using RSA/AES encryption workflows and WebSockets.'
		},
	
		{
			name: 'Real-Time Data Visualization Platform',
			href: 'https://data-visualization-platform-five.vercel.app/',
			github: 'https://github.com/your-repo',
			stack: ['Vue', 'Websocket', 'Echarts', 'Typescript'],
			description:
				'Production-style real-time analytics dashboard that simulates a WebSocket telemetry stream and renders live data with line, bar, area charts, metric cards, and an activity feed.'
		},
	
		{
			name: 'Invoice Management App',
			href: 'https://invoice-mangement-app-iyye.vercel.app/',
			github: 'https://github.com/your-repo',
			stack: ['React', 'TypeScript', 'Next.js'],
			description:
				'Full-stack invoice management app built with Next.js App Router + API routes, Prisma, PostgreSQL (Neon), and React components.'
		},
	
		{
			name: 'Habit Tracker App',
			href: 'https://habit-tracker-app-seven-plum.vercel.app/',
			github: 'https://github.com/your-repo',
			stack: ['Next.js', 'TypeScript', 'MongoDB', 'Socket.IO'],
			description:
				'Mobile-first Progressive Web App for tracking habits. It includes user authentication, protected routes, and full CRUD functionality for habits, along with daily completion tracking, streak calculation, and local data persistence. The app also supports basic PWA features like installability and offline access.'
		},
	
		{
			name: 'AI Page Summarizer Chrome Extension',
			href: 'https://github.com/Ekekwecharles/AI-Page-Summarizer',
			github: 'https://github.com/Ekekwecharles/AI-Page-Summarizer',
			stack: ['React', 'Leaflet'],
			description:
				'Manifest V3 extension that extracts readable text from the active tab, sends it to a Node.js proxy (API keys live on the server), and shows a structured summary in the popup. OpenAI is called first; if that fails, Gemini is used automatically.'
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
	]
} as const;


export type AccentPreset = (typeof SITE.accentPresets)[number];


// projects: [
// 	{
// 		name: 'HighEnd Cars',
// 		stack: ['Next.js', 'TypeScript', 'Supabase', 'Redux Toolkit'],
// 		description:
// 			'Luxury e-commerce platform with authentication, orders, coupons, chat, and payments.'
// 	},

// 	{
// 		name: 'The Wild Oasis',
// 		stack: ['Next.js', 'React', 'Supabase'],
// 		description:
// 			'Hotel management system with admin dashboard, bookings, and role-based authentication.'
// 	},

// 	{
// 		name: 'Rest Countries App',
// 		stack: ['React', 'TypeScript', 'Next.js'],
// 		description:
// 			'Full-stack country data app with serverless API, filtering, and dynamic routing.'
// 	},

// 	{
// 		name: 'Premium Capital',
// 		stack: ['Next.js', 'TypeScript', 'MongoDB', 'Socket.IO'],
// 		description:
// 			'Real-time fintech dashboard with trading simulation and live updates.'
// 	},

// 	{
// 		name: 'WorldWise',
// 		stack: ['React', 'Leaflet'],
// 		description:
// 			'Travel tracker with interactive maps and visited-city visualization.'
// 	}
// ],

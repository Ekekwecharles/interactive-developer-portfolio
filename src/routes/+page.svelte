<script lang="ts">
	import HeroSection from '$lib/components/sections/HeroSection.svelte';
	import { DATA } from '$lib/data';
	import ProjectCard from '$lib/components/projects/ProjectCard.svelte';
	import Button from '$lib/components/ui/Button.svelte';
	import { fly } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';

	const featuredSlugs = ['ziki', 'zedu', 'snoware-gadgets-store', 'meetmind'];
	const featured = featuredSlugs
		.map((slug) => DATA.projects.find((p) => p.slug === slug))
		.filter((p) => p !== undefined);

	const focusAreas = [
		{
			title: 'AI products & agents',
			desc: 'Products where AI agents do real work: agent marketplaces, live AI meeting participants, AI-assisted learning. I also run multi-agent coding workflows to ship faster.'
		},
		{
			title: 'Full-stack web apps',
			desc: 'React and Next.js frontends with TypeScript, backed by Node.js or Go, PostgreSQL or MongoDB, and clean, typed APIs.'
		},
		{
			title: 'Payments & money flows',
			desc: 'In-app currency, wallets, withdrawals, subscriptions and checkout, built so every payment is confirmed exactly once.'
		}
	];
</script>

<svelte:head>
	<title>Ekekwe Charles — AI Product Engineer & Full-Stack Engineer</title>
</svelte:head>

<HeroSection />

<section class="border-b border-[var(--line)] py-20" aria-labelledby="focus-heading">
	<div class="container-prose">
		<p class="text-xs font-semibold tracking-[0.24em] text-[var(--text-2)] uppercase">What I do</p>
		<h2
			id="focus-heading"
			class="mt-2 font-[family-name:var(--font-display)] text-3xl font-semibold text-[var(--text-0)]"
		>
			I build AI-powered products, end to end
		</h2>
		<div class="mt-10 grid gap-4 md:grid-cols-3">
			{#each focusAreas as item, i (item.title)}
				<div
					class="rounded-[var(--radius-lg)] border border-[var(--line)] bg-[color-mix(in_oklab,var(--surface-1)_90%,transparent)] p-6 shadow-[var(--shadow-glow)]"
					in:fly={{ y: 16, duration: 420, easing: cubicOut, delay: 60 + i * 70 }}
				>
					<p class="text-base font-semibold text-[var(--text-0)]">{item.title}</p>
					<p class="mt-2 text-sm leading-relaxed text-[var(--text-2)]">{item.desc}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<section class="border-b border-[var(--line)] py-20" aria-labelledby="featured-heading">
	<div class="container-prose">
		<div class="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
			<div>
				<p class="text-xs font-semibold tracking-[0.24em] text-[var(--text-2)] uppercase">
					Selected work
				</p>
				<h2
					id="featured-heading"
					class="mt-2 font-[family-name:var(--font-display)] text-3xl font-semibold text-[var(--text-0)]"
				>
					Featured projects
				</h2>
			</div>
			<a
				href="/projects"
				class="inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)] transition hover:gap-3"
			>
				All projects
				<svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
					<path d="M5 12h14M13 6l6 6-6 6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
				</svg>
			</a>
		</div>
		<div class="mt-10 grid gap-8 lg:grid-cols-2">
			{#each featured as project, index (project.slug)}
				<ProjectCard {project} {index} />
			{/each}
		</div>
	</div>
</section>

<section class="border-b border-[var(--line)] py-20" aria-labelledby="experience-heading">
	<div class="container-prose">
		<div class="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
			<div>
				<p class="text-xs font-semibold tracking-[0.24em] text-[var(--text-2)] uppercase">
					Experience
				</p>
				<h2
					id="experience-heading"
					class="mt-2 font-[family-name:var(--font-display)] text-3xl font-semibold text-[var(--text-0)]"
				>
					Where I’ve worked
				</h2>
			</div>
			<a
				href="/resume"
				class="inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)] transition hover:gap-3"
			>
				Full resume
				<svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
					<path d="M5 12h14M13 6l6 6-6 6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
				</svg>
			</a>
		</div>
		<ol class="mt-10 space-y-4">
			{#each DATA.experience.slice(0, 4) as exp (exp.role + exp.company)}
				<li
					class="grid gap-2 rounded-[var(--radius-lg)] border border-[var(--line)] bg-[color-mix(in_oklab,var(--surface-1)_90%,transparent)] p-6 md:grid-cols-[1fr_auto]"
				>
					<div>
						<p class="font-semibold text-[var(--text-0)]">{exp.role}</p>
						<p class="text-sm text-[var(--text-1)]">{exp.company}</p>
						<p class="mt-3 text-sm leading-relaxed text-[var(--text-2)]">{exp.points[1] ?? exp.points[0]}</p>
					</div>
					<p class="text-sm whitespace-nowrap text-[var(--text-2)] md:text-right">{exp.period}</p>
				</li>
			{/each}
		</ol>
	</div>
</section>

<section class="py-20" aria-labelledby="cta-heading">
	<div class="container-prose">
		<div
			class="rounded-[var(--radius-xl)] border border-[color-mix(in_oklab,var(--accent)_35%,transparent)] bg-[color-mix(in_oklab,var(--accent)_8%,transparent)] p-8 sm:p-12"
		>
			<h2
				id="cta-heading"
				class="font-[family-name:var(--font-display)] text-3xl font-semibold text-[var(--text-0)]"
			>
				Hiring an AI product or full-stack engineer?
			</h2>
			<p class="mt-3 max-w-2xl text-base text-[var(--text-1)]">
				I’m open to full-time roles, remote or hybrid, or on-site in Port Harcourt. The fastest way to
				reach me is email.
			</p>
			<div class="mt-8 flex flex-wrap gap-3">
				<Button href={`mailto:${DATA.profile.email}`}>{DATA.profile.email}</Button>
				<Button href={DATA.profile.resumePdf} variant="outline" download>Download CV</Button>
				<Button href={DATA.bookCallLink} variant="ghost">Book a call</Button>
			</div>
		</div>
	</div>
</section>

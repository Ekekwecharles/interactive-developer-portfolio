<script lang="ts">
	import HeroSection from '$lib/components/sections/HeroSection.svelte';
	import { DATA } from '$lib/data';
	import ProjectCard from '$lib/components/projects/ProjectCard.svelte';
	import { fade, fly } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
</script>

<svelte:head>
	<title>Ekekwe Charles — Software Engineer (Frontend)</title>
</svelte:head>

<HeroSection />

<section class="border-b border-[var(--line)] py-20" aria-labelledby="skills-heading">
	<div class="container-prose">
		<div class="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
			<div>
				<p class="text-xs font-semibold tracking-[0.24em] text-[var(--text-2)] uppercase">
					Capabilities
				</p>
				<h2
					id="skills-heading"
					class="mt-2 font-[family-name:var(--font-display)] text-3xl font-semibold text-[var(--text-0)]"
				>
					Framework-agnostic frontend engineering
				</h2>
			</div>
			<!-- <p class="max-w-xl text-sm leading-relaxed text-[var(--text-1)]">
				From design systems to edge-ready SvelteKit apps: observability-minded builds, optimistic UI
				where it earns trust, and motion that never fights the user’s attention span.
			</p> -->
			<p class="max-w-xl text-sm leading-relaxed text-[var(--text-1)]">
				From React, Vue, and Next.js to SvelteKit: I build fast, accessible, and scalable interfaces
				with strong UX thinking, clean architecture, and performance-first execution.
			</p>
		</div>
		<div class="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
			{#each [{ skill: 'React / Vue / Svelte', desc: 'Comfortable switching frameworks while maintaining consistent UI architecture and patterns.' }, { skill: 'Next.js & SvelteKit', desc: 'Building SSR/SPA hybrid apps with routing, data loading, and real-world performance considerations.' }, { skill: 'TypeScript Systems', desc: 'Writing predictable, scalable code with strong typing and reusable frontend abstractions.' }, { skill: 'A11y + Performance', desc: 'Designing interfaces that are accessible by default and optimized for real-world devices.' }] as item, i}
				<div
					class="rounded-[var(--radius-lg)] border border-[var(--line)] bg-[color-mix(in_oklab,var(--surface-1)_90%,transparent)] p-5 shadow-[var(--shadow-glow)]"
					in:fly={{ y: 16, duration: 420, easing: cubicOut, delay: 60 + i * 70 }}
				>
					<p class="text-md font-semibold text-[var(--text-0)]">{item.skill}</p>
					<p class="mt-2 text-sm leading-relaxed text-[var(--text-2)]">
						{item.desc}
					</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<section class="py-20" aria-labelledby="featured-heading">
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
				in:fade={{ duration: 400 }}
			>
				View all
				<svg
					class="h-4 w-4"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					aria-hidden="true"
				>
					<path
						d="M5 12h14M13 6l6 6-6 6"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
			</a>
		</div>
		<div class="mt-10 grid gap-8 lg:grid-cols-2">
			{#each DATA.projects.slice(0, 2) as project, index (project.slug)}
				<ProjectCard {project} {index} />
			{/each}
		</div>
	</div>
</section>

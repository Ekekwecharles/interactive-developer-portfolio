<script lang="ts">
	import type { PageProps } from './$types';
	import { fly, fade } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';

	let { data }: PageProps = $props();
	const project = $derived(data.project);
</script>

<svelte:head>
	<title>{project.title} — Alex Rivera</title>
	<meta name="description" content={project.short} />
</svelte:head>

<article>
	<header class="border-b border-[var(--line)] py-16">
		<div class="container-prose">
			<p class="text-xs font-semibold tracking-[0.24em] text-[var(--text-2)] uppercase">
				Case study
			</p>
			<h1
				class="mt-3 max-w-3xl font-[family-name:var(--font-display)] text-4xl leading-tight font-semibold text-[var(--text-0)] sm:text-5xl"
				in:fly={{ y: 16, duration: 480, easing: cubicOut }}
			>
				{project.title}
			</h1>
			<p class="mt-4 max-w-2xl text-lg text-[var(--text-1)]" in:fade={{ duration: 400, delay: 80 }}>
				{project.short}
			</p>
			<div class="mt-8 flex flex-wrap gap-3">
				<a
					class="inline-flex min-h-11 items-center justify-center rounded-[var(--radius-md)] bg-[color-mix(in_oklab,var(--accent)_22%,transparent)] px-4 py-2 text-sm font-semibold text-[var(--text-0)] shadow-[0_0_0_1px_var(--line)] transition hover:-translate-y-0.5"
					href={project.demoUrl}
					target="_blank"
					rel="noreferrer"
				>
					Live demo
				</a>
				<a
					class="inline-flex min-h-11 items-center justify-center rounded-[var(--radius-md)] border border-[var(--line)] px-4 py-2 text-sm font-semibold text-[var(--text-0)] transition hover:border-[color-mix(in_oklab,var(--accent)_40%,transparent)]"
					href={project.repoUrl}
					target="_blank"
					rel="noreferrer"
				>
					GitHub
				</a>
				<a
					href="/projects"
					class="inline-flex min-h-11 items-center justify-center px-4 py-2 text-sm font-semibold text-[var(--text-1)] transition hover:text-[var(--text-0)]"
				>
					← All projects
				</a>
			</div>
		</div>
	</header>

	<section class="py-12" aria-label="Project preview">
		<div class="container-prose">
			<div
				class="overflow-hidden rounded-[var(--radius-xl)] border border-[var(--line)] bg-[var(--surface-2)] shadow-[var(--shadow-glow)]"
			>
				<img
					src={project.image}
					alt={project.imageAlt}
					class="w-full object-cover"
					loading="eager"
					decoding="async"
					width="1200"
					height="750"
				/>
			</div>
		</div>
	</section>

	<section class="border-t border-[var(--line)] py-16" aria-labelledby="overview-heading">
		<div class="container-prose grid gap-12 lg:grid-cols-[2fr_1fr]">
			<div>
				<h2
					id="overview-heading"
					class="font-[family-name:var(--font-display)] text-2xl font-semibold text-[var(--text-0)]"
				>
					Overview
				</h2>
				<p class="mt-4 text-base leading-relaxed text-[var(--text-1)]">{project.description}</p>
				<div class="mt-10 space-y-6">
					<div>
						<h3 class="text-sm font-semibold tracking-[0.18em] text-[var(--text-2)] uppercase">
							Act I — Problem
						</h3>
						<p class="mt-2 text-sm leading-relaxed text-[var(--text-1)]">
							Interfaces that look cinematic but feel brittle under load. The goal: ship visuals
							that stay responsive when data spikes and users tab through quickly.
						</p>
					</div>
					<div>
						<h3 class="text-sm font-semibold tracking-[0.18em] text-[var(--text-2)] uppercase">
							Act II — Approach
						</h3>
						<p class="mt-2 text-sm leading-relaxed text-[var(--text-1)]">
							Layered motion (enter transitions, subtle hover), lazy boundaries for heavy media, and
							semantic structure so keyboard flows stay predictable.
						</p>
					</div>
					<div>
						<h3 class="text-sm font-semibold tracking-[0.18em] text-[var(--text-2)] uppercase">
							Act III — Outcome
						</h3>
						<p class="mt-2 text-sm leading-relaxed text-[var(--text-1)]">
							A portfolio-grade surface: fast first paint, resilient interactions, and
							Lighthouse-friendly budgets without sanding off personality.
						</p>
					</div>
				</div>
			</div>
			<aside class="h-fit rounded-[var(--radius-xl)] p-6 glass-panel">
				<h2 class="text-sm font-semibold tracking-[0.18em] text-[var(--text-2)] uppercase">
					Stack
				</h2>
				<ul class="mt-4 space-y-2 text-sm text-[var(--text-0)]">
					{#each project.stack as tech (tech)}
						<li class="flex items-center gap-2">
							<span class="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" aria-hidden="true"></span>
							{tech}
						</li>
					{/each}
				</ul>
				<p class="mt-6 text-xs leading-relaxed text-[var(--text-2)]">
					Links open in a new tab. Replace demo/repo URLs in <code
						class="rounded bg-[var(--surface-0)] px-1 py-0.5 text-[11px]"
						>src/lib/data/projects.ts</code
					>.
				</p>
			</aside>
		</div>
	</section>
</article>

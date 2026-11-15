<script lang="ts">
	import type { PageProps } from './$types';
	import { fly, fade } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';

	let { data }: PageProps = $props();
	const project = $derived(data.project);
</script>

<svelte:head>
	<title>{project.title} — Ekekwe Charles</title>
	<meta name="description" content={project.short} />
</svelte:head>

<article>
	<header class="border-b border-[var(--line)] py-16">
		<div class="container-prose">
			<p class="text-xs font-semibold tracking-[0.24em] text-[var(--text-2)] uppercase">
				{project.context ?? 'Project'}
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
			{#if project.role}
				<p class="mt-4 text-sm font-medium text-[var(--accent)]">{project.role}</p>
			{/if}
			<div class="mt-8 flex flex-wrap gap-3">
				{#if project.liveUrl}
					<a
						class="inline-flex min-h-11 items-center justify-center rounded-[var(--radius-md)] bg-[color-mix(in_oklab,var(--accent)_22%,transparent)] px-4 py-2 text-sm font-semibold text-[var(--text-0)] shadow-[0_0_0_1px_var(--line)] transition hover:-translate-y-0.5"
						href={project.liveUrl}
						target="_blank"
						rel="noreferrer"
					>
						Visit {project.liveLabel ?? 'live site'} ↗
					</a>
				{/if}
				{#if project.githubUrl}
					<a
						class="inline-flex min-h-11 items-center justify-center rounded-[var(--radius-md)] border border-[var(--line)] px-4 py-2 text-sm font-semibold text-[var(--text-0)] transition hover:border-[color-mix(in_oklab,var(--accent)_40%,transparent)]"
						href={project.githubUrl}
						target="_blank"
						rel="noreferrer"
					>
						Code: {project.githubLabel ?? 'GitHub'} ↗
					</a>
				{/if}
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
				{#if project.contributions?.length}
					<h2 class="mt-12 font-[family-name:var(--font-display)] text-2xl font-semibold text-[var(--text-0)]">
						{project.category === 'team' ? 'What I built' : 'Highlights'}
					</h2>
					<ul class="mt-6 space-y-4">
						{#each project.contributions as c (c.title)}
							<li
								class="rounded-[var(--radius-lg)] border border-[var(--line)] bg-[color-mix(in_oklab,var(--surface-1)_90%,transparent)] p-5"
							>
								<p class="font-semibold text-[var(--text-0)]">{c.title}</p>
								<p class="mt-1 text-sm leading-relaxed text-[var(--text-1)]">{c.detail}</p>
							</li>
						{/each}
					</ul>
				{/if}
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
				<!-- <p class="mt-6 text-xs leading-relaxed text-[var(--text-2)]">
					Links open in a new tab. Replace demo/repo URLs in <code
						class="rounded bg-[var(--surface-0)] px-1 py-0.5 text-[11px]"
						>src/lib/data/projects.ts</code
					>.
				</p> -->
			</aside>
		</div>
	</section>
</article>

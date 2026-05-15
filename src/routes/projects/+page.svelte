<script lang="ts">
	import { fade } from 'svelte/transition';
	import { projectCategories, projects, type ProjectCategory } from '$lib/data/projects';
	import ProjectCard from '$lib/components/projects/ProjectCard.svelte';

	let active: ProjectCategory | 'all' = $state('all');

	let filtered = $derived(
		active === 'all' ? projects : projects.filter((p) => p.category === active)
	);
</script>

<svelte:head>
	<title>Projects — Alex Rivera</title>
</svelte:head>

<section class="border-b border-[var(--line)] py-16" aria-labelledby="projects-heading">
	<div class="container-prose">
		<p class="text-xs font-semibold tracking-[0.24em] text-[var(--text-2)] uppercase">Portfolio</p>
		<h1
			id="projects-heading"
			class="mt-3 font-[family-name:var(--font-display)] text-4xl font-semibold text-[var(--text-0)]"
		>
			Projects
		</h1>
		<p class="mt-4 max-w-2xl text-base text-[var(--text-1)]">
			Each build is a product decision: motion with purpose, accessible defaults, and
			telemetry-friendly architecture.
		</p>

		<div class="mt-8 flex flex-wrap gap-2" role="tablist" aria-label="Filter projects by category">
			{#each projectCategories as cat (cat.id)}
				<button
					type="button"
					role="tab"
					aria-selected={active === cat.id}
					class="rounded-full border px-4 py-2 text-sm font-semibold transition {active === cat.id
						? 'border-[color-mix(in_oklab,var(--accent)_45%,transparent)] bg-[color-mix(in_oklab,var(--accent)_16%,transparent)] text-[var(--text-0)]'
						: 'border-[var(--line)] bg-[color-mix(in_oklab,var(--surface-2)_55%,transparent)] text-[var(--text-1)] hover:border-[color-mix(in_oklab,var(--accent)_35%,transparent)]'}"
					onclick={() => (active = cat.id)}
				>
					{cat.label}
				</button>
			{/each}
		</div>
	</div>
</section>

<section class="py-16" aria-label="Project grid">
	<div class="container-prose">
		{#key active}
			<div class="grid gap-8 lg:grid-cols-2" in:fade={{ duration: 220 }}>
				{#each filtered as project, index (project.slug)}
					<ProjectCard {project} {index} />
				{:else}
					<p class="text-sm text-[var(--text-2)]">No projects in this category yet.</p>
				{/each}
			</div>
		{/key}
	</div>
</section>

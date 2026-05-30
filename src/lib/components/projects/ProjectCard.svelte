<script lang="ts">
	import { scale } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import type { Project } from '$lib/data';

	let { project, index = 0 }: { project: Project; index?: number } = $props();
</script>

<article
	class="group relative overflow-hidden rounded-[var(--radius-xl)] border border-[var(--line)] bg-[color-mix(in_oklab,var(--surface-1)_88%,transparent)] shadow-[var(--shadow-glow)] transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-[color-mix(in_oklab,var(--accent)_38%,transparent)]"
	in:scale={{ start: 0.96, duration: 380, easing: cubicOut, delay: 40 + index * 60 }}
>
	<a href={`/projects/${project.slug}`} class="block focus:outline-none">
		<div
			class="relative aspect-[16/10] overflow-hidden border-b border-[var(--line)] bg-[var(--surface-2)]"
		>
			<img
				src={project.image}
				alt={project.imageAlt}
				class="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
				loading="lazy"
				decoding="async"
				width="800"
				height="500"
			/>
			<div
				class="pointer-events-none absolute inset-0 bg-gradient-to-t from-[color-mix(in_oklab,var(--surface-0)_55%,transparent)] to-transparent opacity-80"
			></div>
			{#if project.highlight}
				<span
					class="absolute top-4 left-4 rounded-full border border-[var(--line)] bg-[color-mix(in_oklab,var(--surface-0)_70%,transparent)] px-3 py-1 text-xs font-semibold tracking-wide text-[var(--text-0)] uppercase backdrop-blur"
				>
					{project.highlight}
				</span>
			{/if}
		</div>
		<div class="space-y-3 p-6">
			<div class="flex items-start justify-between gap-4">
				<div>
					<h2
						class="font-[family-name:var(--font-display)] text-xl font-semibold text-[var(--text-0)]"
					>
						{project.title}
					</h2>
					<p class="mt-1 text-sm text-[var(--text-1)]">{project.short}</p>
				</div>
				<span
					class="shrink-0 rounded-[var(--radius-sm)] border border-[var(--line)] px-2 py-1 text-[10px] font-semibold tracking-[0.18em] text-[var(--text-2)] uppercase"
				>
					{project.category}
				</span>
			</div>
			<div class="flex flex-wrap gap-2">
				{#each project.stack as tech (tech)}
					<span
						class="rounded-[var(--radius-sm)] bg-[color-mix(in_oklab,var(--accent)_10%,transparent)] px-2 py-1 text-xs font-medium text-[var(--text-0)]"
					>
						{tech}
					</span>
				{/each}
			</div>
			<div class="flex flex-wrap gap-3 pt-2 text-sm font-semibold text-[var(--accent)]">
				<span class="inline-flex items-center gap-1">
					View case
					<svg
						class="h-4 w-4 transition group-hover:translate-x-0.5"
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
				</span>
			</div>
		</div>
	</a>
</article>

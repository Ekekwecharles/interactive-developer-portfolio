<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import { DATA } from '$lib/data';
	import Button from '$lib/components/ui/Button.svelte';
	import ParticleCanvas from '$lib/components/effects/ParticleCanvas.svelte';
	import IconGithub from '$lib/components/ui/IconGithub.svelte';
	import IconLinkedin from '$lib/components/ui/IconLinkedin.svelte';
	import IconX from '$lib/components/ui/IconX.svelte';
</script>

<section
	class="relative overflow-hidden border-b border-[var(--line)] py-20 sm:py-28"
	aria-labelledby="hero-heading"
>
	<div class="pointer-events-none absolute inset-0 opacity-40" aria-hidden="true">
		<div
			class="absolute top-0 -left-32 h-96 w-96 rounded-full bg-[color-mix(in_oklab,var(--accent)_35%,transparent)] blur-3xl"
		></div>
		<div
			class="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-[rgb(120_80_255_/0.22)] blur-3xl"
		></div>
	</div>
	<div class="absolute inset-0">
		<ParticleCanvas />
	</div>

	<div class="relative container-prose">
		<p
			class="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[color-mix(in_oklab,var(--surface-2)_65%,transparent)] px-3 py-1 text-xs font-semibold tracking-[0.22em] text-[var(--text-2)] uppercase"
			in:fly={{ y: 12, duration: 420, easing: cubicOut, delay: 40 }}
		>
			Open for collaborations
		</p>
		<h1
			id="hero-heading"
			class="font-[family-name:var(--font-display)] text-[clamp(2.4rem,6vw,4rem)] leading-[1.05] font-semibold tracking-tight text-[var(--text-0)]"
			in:fly={{ y: 18, duration: 520, easing: cubicOut, delay: 90 }}
		>
			{DATA.profile.name}
			<span class="block text-[clamp(1.1rem,3vw,1.6rem)] font-medium text-[var(--text-1)]">
				{DATA.profile.role}
			</span>
		</h1>
		<p
			class="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--text-1)]"
			in:fade={{ duration: 480, delay: 140 }}
		>
			{DATA.profile.intro}
		</p>

		<div class="mt-10 flex flex-wrap items-center gap-3" in:fade={{ duration: 480, delay: 200 }}>
			<Button href="/projects">View projects</Button>
			<Button href="/resume" variant="outline">Printable resume</Button>
			<Button href="/contact" variant="ghost">Contact</Button>
		</div>

		<div class="mt-12 flex flex-wrap gap-3" in:fade={{ duration: 480, delay: 260 }}>
			{#each DATA.profile.socials as s (s.href)}
				<a
					href={s.href}
					target="_blank"
					rel="noreferrer"
					class="inline-flex items-center gap-2 rounded-[var(--radius-md)] border border-[var(--line)] bg-[color-mix(in_oklab,var(--surface-2)_55%,transparent)] px-4 py-2 text-sm font-medium text-[var(--text-0)] transition hover:-translate-y-0.5 hover:border-[color-mix(in_oklab,var(--accent)_40%,transparent)] hover:shadow-[0_18px_50px_-28px_color-mix(in_oklab,var(--accent)_35%,transparent)]"
				>
					{#if s.icon === 'github'}
						<IconGithub class="h-4 w-4" />
					{:else if s.icon === 'linkedin'}
						<IconLinkedin class="h-4 w-4" />
					{:else}
						<IconX class="h-4 w-4" />
					{/if}
					{s.label}
				</a>
			{/each}
			<a
				href={DATA.bookCallLink}
				class="inline-flex items-center gap-2 rounded-[var(--radius-md)] border border-dashed border-[color-mix(in_oklab,var(--accent)_45%,transparent)] px-4 py-2 text-sm font-medium text-[var(--text-1)] transition hover:text-[var(--text-0)]"
				target="_blank"
				rel="noreferrer"
			>
				Schedule a call
			</a>
		</div>
	</div>
</section>

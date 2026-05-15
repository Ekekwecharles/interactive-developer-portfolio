<script lang="ts">
	import { SITE } from '$lib/site';
	import IconGithub from '$lib/components/ui/IconGithub.svelte';
	import IconLinkedin from '$lib/components/ui/IconLinkedin.svelte';
	import IconX from '$lib/components/ui/IconX.svelte';
</script>

<footer class="border-t border-[var(--line)] py-12 text-[var(--text-2)]">
	<div class="container-prose flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
		<div>
			<p class="font-[family-name:var(--font-display)] text-lg font-semibold text-[var(--text-0)]">
				{SITE.name}
			</p>
			<p class="mt-2 max-w-md text-sm leading-relaxed text-[var(--text-1)]">
				Designed as a production-grade SvelteKit reference: motion with guardrails, accessible
				navigation, and performance budgets that survive Lighthouse and real devices.
			</p>
		</div>
		<div class="flex flex-col gap-3">
			<span class="text-xs font-semibold tracking-[0.2em] text-[var(--text-2)] uppercase"
				>Social</span
			>
			<div class="flex flex-wrap gap-3">
				{#each SITE.socials as s (s.href)}
					<a
						href={s.href}
						class="inline-flex items-center gap-2 rounded-[var(--radius-md)] border border-[var(--line)] bg-[color-mix(in_oklab,var(--surface-2)_55%,transparent)] px-3 py-2 text-sm text-[var(--text-0)] transition hover:border-[color-mix(in_oklab,var(--accent)_40%,transparent)]"
						target="_blank"
						rel="noreferrer"
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
			</div>
		</div>
	</div>
	<p class="container-prose mt-10 text-xs text-[var(--text-2)]">
		© {new Date().getFullYear()}
		{SITE.name}. Built with SvelteKit.
	</p>
</footer>

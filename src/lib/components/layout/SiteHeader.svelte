<script lang="ts">
	import { page } from '$app/stores';
	import { SITE } from '$lib/site';
	import { getMode, toggleMode } from '$lib/theme.svelte';
	import Button from '$lib/components/ui/Button.svelte';

	let { onOpenCommand }: { onOpenCommand: () => void } = $props();

	let mobileOpen = $state(false);

	const links = [
		{ href: '/', label: 'Home' },
		{ href: '/projects', label: 'Projects' },
		{ href: '/contact', label: 'Contact' },
		{ href: '/resume', label: 'Resume' }
	];

	function closeMobile() {
		mobileOpen = false;
	}

	function isActive(href: string) {
		const path = $page.url.pathname;
		if (href === '/') return path === '/';
		return path.startsWith(href);
	}
</script>

<header
	class="sticky top-0 z-40 border-b border-[var(--line)] bg-[color-mix(in_oklab,var(--surface-0)_82%,transparent)] backdrop-blur-xl"
>
	<div class="container-prose flex h-16 items-center justify-between gap-4">
		<a
			href="/"
			class="group flex items-center gap-2 font-[family-name:var(--font-display)] text-lg font-semibold tracking-tight text-[var(--text-0)]"
		>
			<span
				class="inline-flex h-9 w-9 items-center justify-center rounded-[var(--radius-md)] bg-[color-mix(in_oklab,var(--accent)_22%,transparent)] text-[var(--accent)] shadow-[0_0_0_1px_var(--line)] transition group-hover:scale-[1.03]"
				aria-hidden="true">EC</span
			>
			<span class="hidden sm:inline">{SITE.name}</span>
		</a>

		<nav class="hidden items-center gap-1 md:flex" aria-label="Primary">
			{#each links as link (link.href)}
				<a
					href={link.href}
					class="rounded-[var(--radius-md)] px-3 py-2 text-sm font-medium text-[var(--text-1)] transition hover:bg-[color-mix(in_oklab,var(--surface-2)_70%,transparent)] hover:text-[var(--text-0)] {isActive(
						link.href
					)
						? 'bg-[color-mix(in_oklab,var(--accent)_14%,transparent)] text-[var(--text-0)] shadow-[inset_0_0_0_1px_color-mix(in_oklab,var(--accent)_35%,transparent)]'
						: ''}"
				>
					{link.label}
				</a>
			{/each}
		</nav>

		<div class="flex items-center gap-2">
			<button
				type="button"
				class="hidden rounded-[var(--radius-md)] border border-[var(--line)] bg-[color-mix(in_oklab,var(--surface-2)_55%,transparent)] px-3 py-2 text-xs font-medium text-[var(--text-1)] transition hover:border-[color-mix(in_oklab,var(--accent)_40%,transparent)] hover:text-[var(--text-0)] md:inline-flex"
				onclick={onOpenCommand}
			>
				<span class="text-[var(--text-2)]">⌘</span>K
			</button>
			<button
				type="button"
				class="rounded-[var(--radius-md)] border border-[var(--line)] bg-[color-mix(in_oklab,var(--surface-2)_55%,transparent)] p-2 text-[var(--text-1)] transition hover:text-[var(--text-0)] md:hidden"
				aria-expanded={mobileOpen}
				aria-controls="mobile-nav"
				onclick={() => (mobileOpen = !mobileOpen)}
			>
				<span class="sr-only">Toggle menu</span>
				<svg
					class="h-5 w-5"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					aria-hidden="true"
				>
					{#if mobileOpen}
						<path d="M6 6l12 12M18 6L6 18" stroke-width="2" stroke-linecap="round" />
					{:else}
						<path d="M4 7h16M4 12h16M4 17h16" stroke-width="2" stroke-linecap="round" />
					{/if}
				</svg>
			</button>
			<button
				type="button"
				class="rounded-[var(--radius-md)] border border-[var(--line)] bg-[color-mix(in_oklab,var(--surface-2)_55%,transparent)] p-2 text-[var(--text-1)] transition hover:text-[var(--text-0)]"
				onclick={toggleMode}
				aria-label={getMode() === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
			>
				{#if getMode() === 'dark'}
					<svg
						class="h-5 w-5"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						aria-hidden="true"
					>
						<circle cx="12" cy="12" r="4" stroke-width="2" />
						<path
							d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"
							stroke-width="2"
							stroke-linecap="round"
						/>
					</svg>
				{:else}
					<svg
						class="h-5 w-5"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						aria-hidden="true"
					>
						<path
							d="M21 14.5A8.5 8.5 0 0 1 9.5 3 6.5 6.5 0 1 0 21 14.5Z"
							stroke-width="2"
							stroke-linejoin="round"
						/>
					</svg>
				{/if}
			</button>
			<Button href="/contact" variant="primary" class="hidden sm:inline-flex">Let’s talk</Button>
		</div>
	</div>

	{#if mobileOpen}
		<div
			id="mobile-nav"
			class="border-t border-[var(--line)] bg-[color-mix(in_oklab,var(--surface-0)_92%,transparent)] px-4 py-4 md:hidden"
			role="dialog"
			aria-modal="true"
			aria-label="Mobile navigation"
		>
			<nav class="flex flex-col gap-1" aria-label="Mobile primary">
				{#each links as link (link.href)}
					<a
						href={link.href}
						class="rounded-[var(--radius-md)] px-3 py-3 text-base font-medium text-[var(--text-0)] hover:bg-[color-mix(in_oklab,var(--surface-2)_80%,transparent)]"
						onclick={closeMobile}
					>
						{link.label}
					</a>
				{/each}
				<button
					type="button"
					class="mt-2 rounded-[var(--radius-md)] px-3 py-3 text-left text-base font-medium text-[var(--text-1)] hover:bg-[color-mix(in_oklab,var(--surface-2)_80%,transparent)]"
					onclick={() => {
						closeMobile();
						onOpenCommand();
					}}
				>
					Command palette
				</button>
			</nav>
		</div>
	{/if}
</header>

<script lang="ts">
	import type { Snippet } from 'svelte';

	type Variant = 'primary' | 'ghost' | 'outline';

	let {
		href,
		type = 'button',
		variant = 'primary',
		class: className = '',
		disabled = false,
		onclick,
		children
	}: {
		href?: string;
		type?: 'button' | 'submit';
		variant?: Variant;
		class?: string;
		disabled?: boolean;
		onclick?: (e: MouseEvent) => void;
		children: Snippet;
	} = $props();

	const base =
		'inline-flex min-h-11 min-w-11 items-center justify-center gap-2 rounded-[var(--radius-md)] px-4 py-2 text-sm font-semibold tracking-wide transition-[transform,box-shadow,background,border-color,color] duration-200 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50';

	const styles: Record<Variant, string> = {
		primary:
			'bg-[color-mix(in_oklab,var(--accent)_22%,transparent)] text-[var(--text-0)] shadow-[0_0_0_1px_var(--line)] hover:shadow-[0_0_0_1px_color-mix(in_oklab,var(--accent)_55%,transparent),0_18px_50px_-28px_color-mix(in_oklab,var(--accent)_45%,transparent)]',
		ghost: 'text-[var(--text-1)] hover:bg-[color-mix(in_oklab,var(--surface-2)_80%,transparent)]',
		outline:
			'border border-[var(--line)] bg-transparent text-[var(--text-0)] hover:border-[color-mix(in_oklab,var(--accent)_45%,transparent)]'
	};
</script>

{#if href}
	<a {href} class="{base} {styles[variant]} {className}">{@render children()}</a>
{:else}
	<button {type} {disabled} class="{base} {styles[variant]} {className}" {onclick}
		>{@render children()}</button
	>
{/if}

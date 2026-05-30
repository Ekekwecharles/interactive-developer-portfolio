<script lang="ts">
	import './layout.css';
	import { onMount } from 'svelte';
	import favicon from '$lib/assets/favicon.svg';
	import { initAppearance } from '$lib/theme.svelte';
	import SiteHeader from '$lib/components/layout/SiteHeader.svelte';
	import SiteFooter from '$lib/components/layout/SiteFooter.svelte';
	import CommandPalette from '$lib/components/layout/CommandPalette.svelte';

	let { children } = $props();

	let paletteOpen = $state(false);

	onMount(() => {
		initAppearance();
	});

	function handleSkip(event: MouseEvent) {
		event.preventDefault();

		const main = document.getElementById('main-content');

		if (main) {
			main.focus();
			main.scrollIntoView();
		}
	}
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
	<link
		href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400..700;1,9..40,400..700&family=Instrument+Sans:ital,wght@0,400..700;1,400..700&display=swap"
		rel="stylesheet"
	/>
	<meta
		name="description"
		content="Immersive SvelteKit portfolio showcasing motion, accessibility, and performance-first frontend engineering."
	/>
</svelte:head>

<a href="#main-content" class="skip-link" onclick={handleSkip}>Skip to main content</a>

<SiteHeader onOpenCommand={() => (paletteOpen = true)} />

<CommandPalette bind:open={paletteOpen} />

<main id="main-content" tabindex="-1" class="min-h-[calc(100dvh-4rem)]">
	{@render children()}
</main>

<SiteFooter />

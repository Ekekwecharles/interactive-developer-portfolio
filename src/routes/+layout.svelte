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
	<link rel="icon" href={favicon} type="image/svg+xml" />
	<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
	<link
		href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400..700;1,9..40,400..700&family=Instrument+Sans:ital,wght@0,400..700;1,400..700&display=swap"
		rel="stylesheet"
	/>
	<meta
		name="description"
		content="Ekekwe Charles — AI Product Engineer and full-stack engineer (React, Next.js, TypeScript, Node.js). Two-time HNG Internship Finalist, part of the team behind Ziki and Zedu."
	/>
	<meta property="og:title" content="Ekekwe Charles — AI Product Engineer & Full-Stack Engineer" />
	<meta
		property="og:description"
		content="I build AI-powered products end to end. Part of the team behind Ziki and Zedu. Open to full-time roles."
	/>
	<meta property="og:type" content="website" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<a href="#main-content" class="skip-link" onclick={handleSkip}>Skip to main content</a>

<SiteHeader onOpenCommand={() => (paletteOpen = true)} />

<CommandPalette bind:open={paletteOpen} />

<main id="main-content" tabindex="-1" class="min-h-[calc(100dvh-4rem)]">
	{@render children()}
</main>

<SiteFooter />

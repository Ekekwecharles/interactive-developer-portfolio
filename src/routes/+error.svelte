<script lang="ts">
	import { page } from '$app/stores';
	import Button from '$lib/components/ui/Button.svelte';
</script>

<svelte:head>
	<title>{$page.status} — Something went wrong</title>
</svelte:head>

<section
	class="container-prose flex min-h-[60vh] flex-col items-center justify-center py-20 text-center"
>
	<p class="text-xs font-semibold tracking-[0.3em] text-[var(--text-2)] uppercase">
		Error {$page.status}
	</p>
	<h1
		class="mt-4 font-[family-name:var(--font-display)] text-4xl font-semibold text-[var(--text-0)]"
	>
		{$page.error?.message ?? 'Unexpected issue'}
	</h1>
	<p class="mt-4 max-w-md text-sm text-[var(--text-1)]">
		The route may have moved, or a link is stale. Use the palette (⌘K) or head home.
	</p>
	<div class="mt-8 flex flex-wrap justify-center gap-3">
		<Button href="/">Back home</Button>
		<Button href="/projects" variant="outline">Projects</Button>
	</div>
</section>

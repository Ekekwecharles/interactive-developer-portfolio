<script lang="ts">
	let { class: className = '' }: { class?: string } = $props();
</script>

<svg
	class={className}
	viewBox="0 0 24 24"
	aria-hidden="true"
	fill="none"
	stroke="currentColor"
	stroke-width="1.6"
>
	<path d="M12 3v18M3 12h18" stroke-linecap="round" />
</svg>

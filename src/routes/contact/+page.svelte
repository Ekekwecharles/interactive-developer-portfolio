<script lang="ts">
	import { enhance } from '$app/forms';
	import type { PageProps } from './$types';
	import { fly, fade } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import Button from '$lib/components/ui/Button.svelte';

	let { form }: PageProps = $props();

	let busy = $state(false);
	let fields = $state({ name: '', email: '', message: '' });

	const errors = $derived((form?.errors ?? {}) as Record<string, string[] | undefined>);
	const success = $derived(form?.success === true);

	$effect(() => {
		if (form && 'values' in form && form.values && form.success !== true) {
			fields = {
				name: form.values.name ?? '',
				email: form.values.email ?? '',
				message: form.values.message ?? ''
			};
		}
	});
</script>

<svelte:head>
	<title>Contact — Ekekwe Charles</title>
</svelte:head>

<section class="border-b border-[var(--line)] py-16" aria-labelledby="contact-heading">
	<div class="container-prose max-w-3xl">
		<p class="text-xs font-semibold tracking-[0.24em] text-[var(--text-2)] uppercase">Contact</p>
		<h1
			id="contact-heading"
			class="mt-3 font-[family-name:var(--font-display)] text-4xl font-semibold text-[var(--text-0)]"
		>
			Tell me about the build
		</h1>
		<p class="mt-4 text-base text-[var(--text-1)]">
			Have a product idea, frontend challenge, or collaboration in mind? I’m always interested in
			building thoughtful, high-performance web experiences.
		</p>
	</div>
</section>

<section class="py-16" aria-label="Contact form">
	<div class="container-prose max-w-3xl">
		{#if success}
			<div
				class="rounded-[var(--radius-lg)] border border-[color-mix(in_oklab,var(--accent)_35%,transparent)] bg-[color-mix(in_oklab,var(--accent)_12%,transparent)] p-6 text-[var(--text-0)]"
				role="status"
				in:fly={{ y: 10, duration: 320, easing: cubicOut }}
			>
				<p class="font-semibold">Message received</p>
				<p class="mt-2 text-sm text-[var(--text-1)]">
					Thanks for reaching out — I’ll reply shortly.
				</p>
			</div>
		{:else}
			<form
				method="POST"
				class="space-y-6 rounded-[var(--radius-xl)] p-8 glass-panel"
				in:fade={{ duration: 280 }}
				use:enhance={() => {
					busy = true;
					return async ({ update }) => {
						await update();
						busy = false;
					};
				}}
			>
				{#if errors._form}
					<div
						class="rounded-[var(--radius-md)] border border-red-400/40 bg-red-500/10 p-3 text-sm text-red-200"
						role="alert"
					>
						{errors._form[0]}
					</div>
				{/if}

				<div>
					<label for="name" class="text-sm font-semibold text-[var(--text-0)]">Name</label>
					<input
						id="name"
						name="name"
						type="text"
						autocomplete="name"
						required
						maxlength="120"
						bind:value={fields.name}
						class="mt-2 w-full rounded-[var(--radius-md)] border border-[var(--line)] bg-[color-mix(in_oklab,var(--surface-0)_70%,transparent)] px-3 py-3 text-sm text-[var(--text-0)] transition outline-none focus:border-[color-mix(in_oklab,var(--accent)_45%,transparent)]"
					/>
					{#if errors.name}
						<p class="mt-1 text-xs text-red-300" id="name-error">{errors.name[0]}</p>
					{/if}
				</div>

				<div>
					<label for="email" class="text-sm font-semibold text-[var(--text-0)]">Email</label>
					<input
						id="email"
						name="email"
						type="email"
						autocomplete="email"
						required
						maxlength="254"
						bind:value={fields.email}
						class="mt-2 w-full rounded-[var(--radius-md)] border border-[var(--line)] bg-[color-mix(in_oklab,var(--surface-0)_70%,transparent)] px-3 py-3 text-sm text-[var(--text-0)] transition outline-none focus:border-[color-mix(in_oklab,var(--accent)_45%,transparent)]"
					/>
					{#if errors.email}
						<p class="mt-1 text-xs text-red-300">{errors.email[0]}</p>
					{/if}
				</div>

				<div>
					<label for="message" class="text-sm font-semibold text-[var(--text-0)]">Message</label>
					<textarea
						id="message"
						name="message"
						required
						rows="6"
						maxlength="5000"
						bind:value={fields.message}
						class="mt-2 w-full rounded-[var(--radius-md)] border border-[var(--line)] bg-[color-mix(in_oklab,var(--surface-0)_70%,transparent)] px-3 py-3 text-sm text-[var(--text-0)] transition outline-none focus:border-[color-mix(in_oklab,var(--accent)_45%,transparent)]"
					></textarea>
					{#if errors.message}
						<p class="mt-1 text-xs text-red-300">{errors.message[0]}</p>
					{/if}
				</div>

				<Button type="submit" variant="primary" disabled={busy}
					>{busy ? 'Sending…' : 'Send message'}</Button
				>
			</form>
		{/if}
	</div>
</section>

<script lang="ts">
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import { fade, scale } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import { DATA } from '$lib/data';
	import { toggleMode, cycleAccent } from '$lib/theme.svelte';

	type LinkItem = { kind: 'link'; label: string; href: string; hint: string };
	type ActionItem = { kind: 'action'; label: string; hint: string; run: () => void };

	let { open = $bindable(false) }: { open?: boolean } = $props();

	let inputEl = $state<HTMLInputElement | null>(null);
	let query = $state('');
	let activeIndex = $state(0);

	const nav: LinkItem[] = [
		{ kind: 'link', label: 'Home', href: '/', hint: 'Landing' },
		{ kind: 'link', label: 'Projects', href: '/projects', hint: 'Case studies' },
		{ kind: 'link', label: 'Contact', href: '/contact', hint: 'Message me' },
		{ kind: 'link', label: 'Resume', href: '/resume', hint: 'Printable CV' }
	];

	function buildActions(): ActionItem[] {
		return [
			{
				kind: 'action',
				label: 'Toggle theme',
				hint: 'Light / dark',
				run: () => toggleMode()
			},
			{
				kind: 'action',
				label: 'Cycle accent',
				hint: 'Palette token',
				run: () => cycleAccent()
			}
		];
	}

	let items = $derived.by(() => {
		const q = query.trim().toLowerCase();
		const proj: LinkItem[] = DATA.projects
			.filter((p) => `${p.title} ${p.stack.join(' ')}`.toLowerCase().includes(q))
			.map((p) => ({
				kind: 'link' as const,
				label: p.title,
				href: `/projects/${p.slug}`,
				hint: 'Project'
			}));
		const n = nav.filter((l) => l.label.toLowerCase().includes(q));
		const a = buildActions().filter((l) => l.label.toLowerCase().includes(q));
		return [...n, ...proj, ...a];
	});

	function close() {
		open = false;
		query = '';
		activeIndex = 0;
	}

	function activate(i: number) {
		const list = items;
		if (!list.length) return;
		activeIndex = (i + list.length) % list.length;
	}

	function submitCurrent() {
		const list = items;
		const item = list[activeIndex];
		if (!item) return;
		if (item.kind === 'link') {
			close();
			goto(item.href);
		} else {
			item.run();
			close();
		}
	}

	function onGlobalKey(e: KeyboardEvent) {
		const meta = e.metaKey || e.ctrlKey;
		if (meta && e.key.toLowerCase() === 'k') {
			e.preventDefault();
			open = !open;
		}
		if (!open) return;
		if (e.key === 'Escape') {
			e.preventDefault();
			close();
		}
		if (e.key === 'ArrowDown') {
			e.preventDefault();
			activate(activeIndex + 1);
		}
		if (e.key === 'ArrowUp') {
			e.preventDefault();
			activate(activeIndex - 1);
		}
		if (e.key === 'Enter') {
			e.preventDefault();
			submitCurrent();
		}
	}

	onMount(() => {
		window.addEventListener('keydown', onGlobalKey);
		return () => window.removeEventListener('keydown', onGlobalKey);
	});

	$effect(() => {
		if (open) {
			queueMicrotask(() => inputEl?.focus());
			activeIndex = 0;
		}
	});

	$effect(() => {
		void query;
		activeIndex = 0;
	});
</script>

{#if open}
	<div class="fixed inset-0 z-[100]">
		<button
			type="button"
			class="absolute inset-0 bg-black/60 backdrop-blur-sm"
			aria-label="Close command palette"
			transition:fade={{ duration: 160 }}
			onclick={close}
		></button>
		<div class="pointer-events-none relative flex justify-center px-4 pt-[10vh]">
			<div
				class="pointer-events-auto w-full max-w-xl overflow-hidden rounded-[var(--radius-xl)] border border-[var(--line)] shadow-[0_40px_120px_-60px_rgb(0_0_0_/0.75)] glass-panel"
				role="dialog"
				tabindex="-1"
				aria-modal="true"
				aria-label="Command palette"
				transition:scale={{ start: 0.96, duration: 200, easing: cubicOut }}
			>
				<div class="flex items-center gap-2 border-b border-[var(--line)] px-4 py-3">
					<svg
						class="h-5 w-5 text-[var(--text-2)]"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						aria-hidden="true"
					>
						<circle cx="11" cy="11" r="7" stroke-width="2" />
						<path d="M21 21l-3.5-3.5" stroke-width="2" stroke-linecap="round" />
					</svg>
					<input
						bind:this={inputEl}
						bind:value={query}
						class="w-full bg-transparent text-sm text-[var(--text-0)] outline-none placeholder:text-[var(--text-2)]"
						placeholder="Jump to a page, project, or action…"
						autocomplete="off"
						autocapitalize="off"
						spellcheck={false}
						aria-activedescendant={items[activeIndex] ? `palette-${activeIndex}` : undefined}
					/>
					<button
						type="button"
						class="text-xs text-[var(--text-2)] hover:text-[var(--text-0)]"
						onclick={close}
					>
						Esc
					</button>
				</div>
				<ul class="max-h-[50vh] overflow-auto py-2" role="listbox" aria-label="Results">
					{#each items as item, i (item.kind + '-' + item.label)}
						<li id="palette-{i}" role="option" aria-selected={i === activeIndex}>
							<button
								type="button"
								class="flex w-full items-center justify-between px-4 py-3 text-left text-sm transition {i ===
								activeIndex
									? 'bg-[color-mix(in_oklab,var(--accent)_14%,transparent)] text-[var(--text-0)]'
									: 'text-[var(--text-1)] hover:bg-[color-mix(in_oklab,var(--surface-2)_70%,transparent)]'}"
								onmouseenter={() => (activeIndex = i)}
								onclick={() => {
									activeIndex = i;
									submitCurrent();
								}}
							>
								<span class="font-medium">{item.label}</span>
								<span class="text-xs text-[var(--text-2)]">{item.hint}</span>
							</button>
						</li>
					{:else}
						<li class="px-4 py-6 text-center text-sm text-[var(--text-2)]">No matches</li>
					{/each}
				</ul>
				<p class="border-t border-[var(--line)] px-4 py-2 text-[11px] text-[var(--text-2)]">
					Navigate with arrows · Enter to open · Ctrl/⌘ K anytime
				</p>
			</div>
		</div>
	</div>
{/if}

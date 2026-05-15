import { browser } from '$app/environment';
import type { AccentPreset } from '$lib/site';

export type ThemeMode = 'light' | 'dark';

const STORAGE_THEME = 'portfolio-theme';
const STORAGE_ACCENT = 'portfolio-accent';

function readStoredTheme(): ThemeMode | null {
	if (!browser) return null;
	const v = localStorage.getItem(STORAGE_THEME);
	if (v === 'light' || v === 'dark') return v;
	return null;
}

function readStoredAccent(): AccentPreset | null {
	if (!browser) return null;
	const v = localStorage.getItem(STORAGE_ACCENT);
	if (v === 'cyan' || v === 'violet' || v === 'amber' || v === 'emerald') return v;
	return null;
}

let mode = $state<ThemeMode>('dark');
let accent = $state<AccentPreset>('cyan');

function applyDom(m: ThemeMode, a: AccentPreset) {
	if (!browser) return;
	document.documentElement.dataset.theme = m;
	document.documentElement.dataset.accent = a;
	document.documentElement.style.colorScheme = m === 'dark' ? 'dark' : 'light';
}

export function initAppearance() {
	if (!browser) return;
	mode =
		readStoredTheme() ?? (matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
	accent = readStoredAccent() ?? 'cyan';
	applyDom(mode, accent);
}

export function getMode() {
	return mode;
}

export function getAccent() {
	return accent;
}

export function setMode(next: ThemeMode) {
	mode = next;
	if (browser) {
		localStorage.setItem(STORAGE_THEME, next);
		applyDom(mode, accent);
	}
}

export function toggleMode() {
	setMode(mode === 'dark' ? 'light' : 'dark');
}

export function setAccent(next: AccentPreset) {
	accent = next;
	if (browser) {
		localStorage.setItem(STORAGE_ACCENT, next);
		applyDom(mode, accent);
	}
}

export function cycleAccent() {
	const order: AccentPreset[] = ['cyan', 'violet', 'amber', 'emerald'];
	const i = order.indexOf(accent);
	setAccent(order[(i + 1) % order.length]);
}

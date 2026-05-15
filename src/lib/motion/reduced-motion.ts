import { browser } from '$app/environment';

export function prefersReducedMotion(): boolean {
	if (!browser) return false;
	return matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export const motionDuration = {
	fast: 160,
	normal: 240,
	slow: 420
} as const;

export const motionEase = 'cubic-bezier(0.22, 1, 0.36, 1)';

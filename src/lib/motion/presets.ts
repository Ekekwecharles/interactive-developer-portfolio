/** Shared motion tokens for JS-driven animation (CSS prefers-reduced-motion still applies globally). */
export const presets = {
	duration: {
		fast: 160,
		normal: 240,
		slow: 420
	},
	easing: 'cubic-bezier(0.22, 1, 0.36, 1)'
} as const;

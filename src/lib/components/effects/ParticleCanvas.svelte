<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import { prefersReducedMotion } from '$lib/motion/reduced-motion';

	let canvas = $state<HTMLCanvasElement | null>(null);
	let reduce = $state(false);

	onMount(() => {
		reduce = prefersReducedMotion();
		if (!browser || reduce || !canvas) return;

		const ctx = canvas.getContext('2d');
		if (!ctx) return;

		let raf = 0;
		let w = 0;
		let h = 0;
		const particles = Array.from({ length: 48 }, () => ({
			x: Math.random(),
			y: Math.random(),
			r: 0.4 + Math.random() * 1.4,
			vx: (Math.random() - 0.5) * 0.00035,
			vy: (Math.random() - 0.5) * 0.00035,
			a: 0.08 + Math.random() * 0.18
		}));

		function resize() {
			if (!canvas) return;
			const c = canvas.getContext('2d');
			if (!c) return;
			const dpr = Math.min(window.devicePixelRatio || 1, 2);
			w = canvas.clientWidth;
			h = canvas.clientHeight;
			canvas.width = Math.floor(w * dpr);
			canvas.height = Math.floor(h * dpr);
			c.setTransform(dpr, 0, 0, dpr, 0, 0);
		}

		resize();
		const ro = new ResizeObserver(resize);
		ro.observe(canvas);

		function frame() {
			if (!ctx || !canvas) return;
			ctx.clearRect(0, 0, w, h);
			for (const p of particles) {
				p.x += p.vx;
				p.y += p.vy;
				if (p.x < 0 || p.x > 1) p.vx *= -1;
				if (p.y < 0 || p.y > 1) p.vy *= -1;
				ctx.beginPath();
				ctx.fillStyle = `rgba(92,240,255,${p.a})`;
				ctx.arc(p.x * w, p.y * h, p.r * 4, 0, Math.PI * 2);
				ctx.fill();
			}
			raf = requestAnimationFrame(frame);
		}
		raf = requestAnimationFrame(frame);

		return () => {
			cancelAnimationFrame(raf);
			ro.disconnect();
		};
	});
</script>

{#if !reduce}
	<canvas
		bind:this={canvas}
		class="pointer-events-none absolute inset-0 h-full w-full opacity-60 mix-blend-screen"
		aria-hidden="true"
	></canvas>
{/if}

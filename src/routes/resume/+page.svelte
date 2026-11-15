<script lang="ts">
	import { DATA } from '$lib/data';
	import Button from '$lib/components/ui/Button.svelte';

	const skillRows = [
		{ label: 'AI & Agents', items: DATA.skills.aiWorkflow },
		{ label: 'Frontend', items: DATA.skills.frontend },
		{ label: 'Backend', items: DATA.skills.backend },
		{ label: 'Payments', items: DATA.skills.payments },
		{ label: 'Tools', items: DATA.skills.tools },
		{ label: 'Languages', items: DATA.skills.languages }
	];
</script>

<svelte:head>
	<title>Resume — {DATA.profile.name}</title>
</svelte:head>

<div class="resume-shell border-b border-[var(--line)] py-12 print:border-0 print:py-0">
	<div class="container-prose max-w-3xl print:max-w-none">
		<div class="flex flex-wrap items-center justify-between gap-4 print:hidden">
			<h1 class="text-3xl font-semibold text-[var(--text-0)]">Resume</h1>

			<div class="flex gap-2">
				<Button href={DATA.profile.resumePdf} download>Download PDF</Button>
				<Button type="button" variant="outline" onclick={() => window.print()}>Print</Button>
				<Button href="/" variant="ghost">Home</Button>
			</div>
		</div>

		<article
			class="mt-8 rounded-[var(--radius-xl)] border border-[var(--line)] bg-[color-mix(in_oklab,var(--surface-1)_92%,transparent)] p-8 print:mt-0 print:border-0 print:bg-white print:p-0 print:text-black"
		>
			<!-- HEADER -->
			<header class="border-b border-[var(--line)] pb-6 print:border-black">
				<h1 class="hidden text-3xl font-semibold print:block">
					{DATA.profile.name}
				</h1>

				<p class="text-lg text-[var(--text-1)] print:text-neutral-800">
					{DATA.profile.role}
				</p>

				<p
					class="mt-3 max-w-2xl text-sm leading-relaxed text-[var(--text-2)] print:text-neutral-700"
				>
					{DATA.profile.summary}
				</p>

				<ul class="mt-4 flex flex-wrap gap-3 text-sm text-[var(--accent)] print:text-neutral-900">
					<li>
						<a href={`mailto:${DATA.profile.email}`} class="underline">{DATA.profile.email}</a>
					</li>
					<li class="text-[var(--text-2)] print:text-neutral-700">{DATA.profile.location}</li>

					{#each DATA.profile.socials as s (s.href)}
						<li>
							<a href={s.href} class="underline">{s.label}</a>
						</li>
					{/each}
				</ul>
			</header>

			<!-- SKILLS -->
			<section class="mt-6 border-b border-[var(--line)] pb-6 print:border-gray-200">
				<h2 class="section-title">Core Skills</h2>

				<div class="mt-3 space-y-2 text-sm text-[var(--text-1)] print:text-neutral-800">
					{#each skillRows as row (row.label)}
						<p>
							<span class="font-semibold text-[var(--text-0)] print:text-black">{row.label}:</span>
							{row.items.join(', ')}
						</p>
					{/each}
				</div>
			</section>

			<!-- EXPERIENCE -->
			<section class="mt-6 border-b border-[var(--line)] pb-6 print:border-gray-200">
				<h2 class="section-title">Experience</h2>

				<div class="mt-4 space-y-6 text-sm">
					{#each DATA.experience as exp}
						<div>
							<h3 class="font-semibold text-[var(--text-0)] print:text-black">
								{exp.role} — {exp.company}
							</h3>

							<p class="text-xs text-[var(--text-2)] print:text-neutral-600">
								{exp.period}
							</p>

							<ul class="mt-2 list-disc space-y-1 pl-5 text-[var(--text-1)] print:text-neutral-800">
								{#each exp.points as point}
									<li>{point}</li>
								{/each}
							</ul>
						</div>
					{/each}
				</div>
			</section>

			<!-- EDUCATION -->
			<section class="mt-6 border-b border-[var(--line)] pb-6 print:border-gray-200">
				<h2 class="section-title">Education</h2>

				<div class="mt-4 space-y-4 text-sm">
					{#each DATA.education as edu}
						<div>
							<h3 class="font-semibold">{edu.school}</h3>
							<p class="text-xs text-[var(--text-2)] print:text-neutral-600">
								{edu.degree} • {edu.period}
							</p>
							{#if edu?.details}
								<p class="text-sm text-[var(--text-1)] print:text-neutral-800">
									{edu.details}
								</p>
							{/if}
						</div>
					{/each}
				</div>
			</section>

			<!-- PROJECTS -->
			<section class="mt-6 border-b border-[var(--line)] pb-6 print:border-gray-200">
				<h2 class="section-title">Projects</h2>

				<div class="mt-4 space-y-5 text-sm">
					{#each DATA.projects.slice(0, 6) as project (project.slug)}
						<div>
							<p class="font-semibold text-[var(--text-0)] print:text-black">
								{project.title}
								{#if project.role}
									<span class="font-normal text-[var(--text-2)] print:text-neutral-600">· {project.role}</span>
								{/if}
							</p>
							<p class="mt-1 text-[var(--text-1)] print:text-neutral-800">{project.short}</p>
							<p class="mt-1 flex flex-wrap gap-x-4 text-xs">
								{#if project.liveUrl}
									<a href={project.liveUrl} target="_blank" rel="noopener noreferrer" class="text-[var(--accent)] underline-offset-4 hover:underline print:text-black"
										>{project.liveLabel ?? 'Live site'}</a
									>
								{/if}
								{#if project.githubUrl}
									<a href={project.githubUrl} target="_blank" rel="noopener noreferrer" class="text-[var(--accent)] underline-offset-4 hover:underline print:text-black"
										>{project.githubLabel ?? 'GitHub'}</a
									>
								{/if}
								<span class="text-[var(--text-2)]">{project.stack.slice(0, 6).join(' • ')}</span>
							</p>
						</div>
					{/each}
				</div>
			</section>

			<!-- INTERESTS -->
			<section class="mt-6">
				<h2 class="section-title">Interests</h2>

				<p class="mt-3 text-sm text-[var(--text-1)] print:text-neutral-800">
					{DATA.interests.join(' • ')}
				</p>
			</section>
		</article>
	</div>
</div>

<style>
	.section-title {
		font-size: 0.75rem;
		font-weight: 600;
		letter-spacing: 0.2em;
		text-transform: uppercase;
		color: var(--text-2);
	}

	@media print {
		:global(body) {
			background: white !important;
		}
		.resume-shell {
			background: white;
			color: black;
		}
	}
</style>

<script lang="ts">
	import { SITE, RESUME } from '$lib/site';
	import Button from '$lib/components/ui/Button.svelte';
</script>

<svelte:head>
	<title>Resume — {SITE.name}</title>
</svelte:head>

<div class="resume-shell border-b border-[var(--line)] py-12 print:border-0 print:py-0">
	<div class="container-prose max-w-3xl print:max-w-none">
		<div class="flex flex-wrap items-center justify-between gap-4 print:hidden">
			<h1 class="text-3xl font-semibold text-[var(--text-0)]">Resume</h1>

			<div class="flex gap-2">
				<Button type="button" variant="outline" onclick={() => window.print()}>
					Print / Save PDF
				</Button>
				<Button href="/" variant="ghost">Home</Button>
			</div>
		</div>

		<article
			class="mt-8 rounded-[var(--radius-xl)] border border-[var(--line)] bg-[color-mix(in_oklab,var(--surface-1)_92%,transparent)] p-8 print:mt-0 print:border-0 print:bg-white print:p-0 print:text-black"
		>
			<!-- HEADER -->
			<header class="border-b border-[var(--line)] pb-6 print:border-black">
				<h1 class="hidden text-3xl font-semibold print:block">
					{SITE.name}
				</h1>

				<p class="text-lg text-[var(--text-1)] print:text-neutral-800">
					{SITE.title}
				</p>

				<p class="mt-3 max-w-2xl text-sm leading-relaxed text-[var(--text-2)] print:text-neutral-700">
					{RESUME.profile.summary}
				</p>

				<ul class="mt-4 flex flex-wrap gap-3 text-sm text-[var(--accent)] print:text-neutral-900">
					<li>{SITE.email}</li>

					{#each SITE.socials as s (s.href)}
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
					<p><span class="font-semibold text-[var(--text-0)] print:text-black">Frontend:</span> {RESUME.skills.frontend.join(', ')}</p>
					<p><span class="font-semibold text-[var(--text-0)] print:text-black">Backend:</span> {RESUME.skills.backend.join(', ')}</p>
					<p><span class="font-semibold text-[var(--text-0)] print:text-black">Tools:</span> {RESUME.skills.tools.join(', ')}</p>
					<p><span class="font-semibold text-[var(--text-0)] print:text-black">Languages:</span> {RESUME.skills.languages.join(', ')}</p>
					<p><span class="font-semibold text-[var(--text-0)] print:text-black">AI Workflow:</span> {RESUME.skills.aiWorkflow.join(', ')}</p>
				</div>
			</section>

			<!-- EXPERIENCE -->
			<section class="mt-6 border-b border-[var(--line)] pb-6 print:border-gray-200">
				<h2 class="section-title">Experience</h2>

				<div class="mt-4 space-y-6 text-sm">
					{#each RESUME.experience as exp}
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
					{#each RESUME.education as edu}
						<div>
							<h3 class="font-semibold">{edu.school}</h3>
							<p class="text-xs text-[var(--text-2)] print:text-neutral-600">
								{edu.degree} • {edu.period}
							</p>
							{#if edu.details}
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
					{#each RESUME.projects as project}
						<div>
							<a
							href={project.href}
							target="_blank"
							rel="noopener noreferrer"
							class="font-semibold text-[var(--text-0)] underline-offset-4 transition hover:underline hover:text-[var(--accent)]">
								{project.name}
							</a>
							<!-- <a href="" class="text-green-500">hello</a> -->
							<br>
							<p class="text-xs text-[var(--text-2)]">
								{project.stack.join(' • ')}
							</p>
							<p class="mt-1 text-[var(--text-1)] print:text-neutral-800">
								{project.description}
							</p>
						</div>
					{/each}
				</div>
			</section>

			<!-- INTERESTS -->
			<section class="mt-6">
				<h2 class="section-title">Interests</h2>

				<p class="mt-3 text-sm text-[var(--text-1)] print:text-neutral-800">
					{RESUME.interests.join(' • ')}
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
import { error } from '@sveltejs/kit';
import { DATA } from '$lib/data';
import { getProjectBySlug } from '$lib/data';
import type { EntryGenerator, PageLoad } from './$types';

export const prerender = true;

export const entries: EntryGenerator = () => {
	return DATA.projects.map((p) => ({ slug: p.slug }));
};

export const load: PageLoad = ({ params }) => {
	const project = getProjectBySlug(params.slug);
	if (!project) error(404, 'Project not found');
	return { project };
};

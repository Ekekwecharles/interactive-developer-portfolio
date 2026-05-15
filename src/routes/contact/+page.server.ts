import { fail } from '@sveltejs/kit';
import { z } from 'zod';
import { env } from '$env/dynamic/private';

const schema = z.object({
	name: z.string().trim().min(1, 'Name is required').max(120),
	email: z.string().trim().email('Valid email required').max(254),
	message: z.string().trim().min(10, 'Message should be at least 10 characters').max(5000)
});

export const actions = {
	default: async ({ request }) => {
		const form = await request.formData();
		const raw = {
			name: String(form.get('name') ?? ''),
			email: String(form.get('email') ?? ''),
			message: String(form.get('message') ?? '')
		};

		const parsed = schema.safeParse(raw);
		if (!parsed.success) {
			const fieldErrors = parsed.error.flatten().fieldErrors;
			return fail(400, {
				errors: fieldErrors,
				values: raw
			});
		}

		const payload = parsed.data;

		/** Optional server-side email — set RESEND_API_KEY in production; never expose to client */
		const apiKey = env.RESEND_API_KEY;
		if (apiKey) {
			try {
				const res = await fetch('https://api.resend.com/emails', {
					method: 'POST',
					headers: {
						Authorization: `Bearer ${apiKey}`,
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({
						from: env.RESEND_FROM ?? 'Portfolio <onboarding@resend.dev>',
						to: env.RESEND_TO ?? 'you@example.com',
						subject: `Portfolio contact from ${payload.name}`,
						text: `From: ${payload.name} <${payload.email}>\n\n${payload.message}`
					})
				});
				if (!res.ok) {
					console.error('Resend error', await res.text());
					return fail(502, {
						errors: { _form: ['Unable to send right now. Try again soon.'] },
						values: raw
					});
				}
			} catch (e) {
				console.error(e);
				return fail(502, {
					errors: { _form: ['Unable to send right now. Try again soon.'] },
					values: raw
				});
			}
		}

		return { success: true, values: { name: '', email: '', message: '' } };
	}
};

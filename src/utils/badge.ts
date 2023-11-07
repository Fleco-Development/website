import { z } from 'astro/zod';

const badgeSchema = () =>
	z.object({
		variant: z.enum(['note', 'danger', 'success', 'caution', 'tip', 'default']).default('default'),
		text: z.string(),
	});

export type Badge = z.output<ReturnType<typeof badgeSchema>>;

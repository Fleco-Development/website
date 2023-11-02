import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	base: '/website',
	integrations: [starlight({
		title: 'Fleco',
		logo: {
			src: './src/assets/fleco.svg',
		},
		customCss: ['./src/assets/custom.css'],
		social: {
			github: 'https://github.com/Fleco-Development',
			discord: 'https://discord.gg/jjytrCZgrE'
		},
		sidebar: [{
			label: 'Fleco',
			items: [
				// Each item here is one entry in the navigation menu.
				{
					label: 'Guides',
					autogenerate: {
						directory: 'fleco/guides'
					}
				}]
		}, {
			label: '@fleco/duration',
			collapsed: true,
			items: [
				{
					label: 'Getting Started',
					link: 'packages/duration/get-started'
				},
				{
					label: 'Classes',
					autogenerate: {
						directory: 'packages/duration/classes',
					},
				},
				{
					label: 'Interfaces',
					autogenerate: {
						directory: 'packages/duration/interfaces',
					},
				},
				{
					label: 'Enums',
					autogenerate: {
						directory: 'packages/duration/enums',
					},
				}
			]
		}]
	})]
});
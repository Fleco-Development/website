import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import prefetch from '@astrojs/prefetch';
import Compress from "astro-compress";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
	site: 'https://www.fleco.cloud/',
	integrations: [starlight({
		title: 'Fleco',
		logo: {
			src: './src/assets/fleco.svg'
		},
		customCss: ['./src/assets/custom.css', './src/assets/tailwind.css'],
		social: {
			github: 'https://github.com/Fleco-Development',
			discord: 'https://discord.gg/jjytrCZgrE'
		},
		components: {
			Footer: './src/overrides/Footer.astro'
		},
		sidebar: [{
			label: 'Fleco',
			items: [
				// Each item here is one entry in the navigation menu.
				{
					label: 'Guides',
					autogenerate: {
						directory: 'fleco/guides'
					},
					collapsed: true,
				}]
		}, {
			label: '@fleco/duration',
			collapsed: true,
			items: [{
				label: 'Getting Started',
				link: 'packages/duration/get-started',
			}, {
				label: 'Classes',
				autogenerate: {
					directory: 'packages/duration/classes',
				},
				collapsed: true,
			}, {
				label: 'Interfaces',
				autogenerate: {
					directory: 'packages/duration/interfaces',
				},
				collapsed: true,
			}, {
				label: 'Enums',
				autogenerate: {
					directory: 'packages/duration/enums',
				},
				collapsed: true,
			}, {
				label: 'Examples',
				autogenerate: {
					directory: 'packages/duration/examples',
				},
				collapsed: true,
			}]
		}]
	}), tailwind({
		applyBaseStyles: false
	}), prefetch(), Compress({
		SVG: false //This will mess up images if you enable this.
	})]
});
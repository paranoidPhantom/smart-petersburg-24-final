// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	app: {
		pageTransition: {
			name: "view",
			mode: "out-in"
		},
		layoutTransition: {
			name: "view",
			mode: "out-in"
		}
	},
	modules: ['@nuxt/ui', '@nuxt/content', 'nuxt-icons'],
	content: {
		markdown: {
			anchorLinks: false
		}
	},

	css: ["assets/style.scss"],
})
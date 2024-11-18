export default defineNuxtConfig({
	modules: [
		'@nuxtjs/tailwindcss',
		'@vueuse/nuxt',
		'@nuxt/image',
		'@nuxtjs/supabase',
	],
	supabase: {
		redirect: false,
	},

	compatibilityDate: '2024-11-08',
});

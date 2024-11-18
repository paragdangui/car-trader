export default defineNuxtRouteMiddleware((to, from) => {
	if (to.path.includes('profile')) { // remove this condition if you are not gonna at a 'global' middleware which will execute on all pages. 
		const user = useSupabaseUser();
		if (user.value) {
			return;
		} else {
			return navigateTo('/login');
		}
	}

});
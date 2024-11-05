<script setup lang="ts">
	defineProps({
		car: Object,
	});
	const route = useRoute();
	const { toTitleCase } = useUtilities();
	const { cars } = useCars();
	useHead({
		title: `${toTitleCase(route.params.name)}`,
	});

	definePageMeta({
		layout: 'custom',
	});

	const car = computed(() => {
		return cars.find((c) => {
			return c.id === parseInt(route.params.id);
		});
	});

	if (!car.value) {
		throw createError({
			statusCode: 404,
			statusMessage: `Car with id of ${route.params.id} deesn't exist`,
			fatal: true,
		});
	}
</script>

<template>
	<div v-if="car">
		<CarDetailHero :car="car" />
		<CarDetailAttributes :features="car.features" />
		<CarDetailDescription :description="car.description" />
		<CarDetailContact />
	</div>
</template>

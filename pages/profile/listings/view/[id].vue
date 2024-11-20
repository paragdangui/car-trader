<script setup>
	definePageMeta({
		layout: 'custom',
		// middleware: ['auth'],
	});

	const route = useRoute();
	const { data: messages } = await useFetch(
		`/api/car/listings/${route.params.id}/message`,
	);
</script>

<template>
	<div v-if="messages && messages.length" class="rounded shadow mt-20">
		<CarMessageCard
			v-for="message in messages"
			:key="message.id"
			:message="message"
		/>
	</div>
	<div v-else>
		<p>No messages found.</p>
	</div>
</template>

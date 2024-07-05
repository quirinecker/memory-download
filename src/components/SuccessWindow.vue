<script setup lang="ts">
import Window from './Window.vue';
const emit = defineEmits([ 'onClose' ]);

</script>

<template>
	<Window @onClose="emit('onClose')">
		<div class="flex justify-center items-center">
			<span class="p-20">
				UioU73Qnd+wYvdWGO5RjZbMIUChGDpcHnIhSLeBO12Z1pC2IAmG3LQujW2vIOkjO
			</span>
		</div>
	</Window>
</template>

<style scoped>

</style>
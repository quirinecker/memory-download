<script setup lang="ts">
import {X} from 'lucide-vue-next'
const emit = defineEmits(['onClose'])

</script>

<template>
	<div class="bg-white max-w-[1500px] border-windowborder1 border-2 rounded-md overflow-hidden shadow flex flex-col justify-center items-center gap-2">
		<div id="navbar" class="h-7 w-full bg-gradient-to-b from-windowborder1 to-windowborder2 flex justify-end pr-3 items-center">
			<div id="close-button" @click="emit('onClose')"
				class="aspect-square h-4/6 text-white flex items-center justify-center cursor-pointer rounded-sm radial">
				<X class="w-full" />
			</div>
		</div>
		<slot/>
	</div>
</template>

<style scoped>

</style>
<script setup lang="ts">

import { X } from 'lucide-vue-next'

const props = withDefaults(defineProps<{
	open?: boolean
}>(), { open: true })

const emit = defineEmits([
	'onClose',
	'buyMemory'
])


</script>

<template>
	<div v-if="props.open"
		class="bg-white max-w-[1500px] border-windowborder1 border-2 overflow-hidden shadow flex flex-col justify-center items-center gap-2 rounded-md">
		<div id="navbar" class="h-7 w-full bg-gradient-to-b from-windowborder1 via-windowborder1 to-windowborder2 flex justify-end pr-3 items-center">
			<div id="close-button" @click="emit('onClose')"
				class="aspect-square h-4/6 text-white flex items-center justify-center cursor-pointer rounded-sm radial">
				<X class="w-full" />
			</div>
		</div>
		<video autoplay muted loop class="w-5/6 h-48 overflow-hidden object-cover">
			<source src="/snowboard.mp4">
			</source>
		</video>
		<div id="content" class="flex flex-row gap-3 p-2 h-[700px]">
			<video autoplay muted loop class="h-11/12 w-[3000px] object-cover overflow-hidden">
				<source src="/single.mp4">
			</video>
			<div class="h-11/12">
				<button @click="emit('buyMemory')" class="bg-gradient-to-r from-green-500 to-green-300 m-44 rounded-xl px-20 py-10 text-6xl font-bold text-white hover:animate-spin transition-all duration-1000"> Buy Memory </button>
			</div>
			<video autoplay muted loop class="h-11/12 w-[3000px] object-cover overflow-hidden">
				<source src="/dancing.mp4">
			</video>
		</div>

	</div>
</template>

<style scoped>
</style>
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import ScamWindow from './components/ScamWindow.vue';
import SuccessWindow from './components/SuccessWindow.vue';
const windows = ref<{success: boolean, gap: number}[]>([])
const success = ref(false)

onMounted(() => {
	console.log('adding window')
	windows.value.push({success: false, gap: 10})
})

function spawnWindow() {
	windows.value.push({
		gap: windows.value[windows.value.length - 1].gap + 20,
		success: success.value
	})
}

</script>

<template>
	<main class="bg-windowsxp h-screen w-screen bg-cover">
		<div id="container" class="flex items-center justify-center fixed h-screen w-screen">
			<div v-for="window of windows" :style="{top: `${window.gap}px`, left: `${window.gap}px`}" class="absolute">
				<ScamWindow @buyMemory="success = true; spawnWindow()" v-if="!window.success" @onClose="spawnWindow"/>
				<SuccessWindow v-if="window.success" @onClose="spawnWindow"/>
			</div>
		</div>
	</main>
</template>

<style scoped></style>
<script lang="ts" setup>
const MobileNavigation = useState<boolean>("g-mobile-sidebar")

const colorMode = useColorMode()

onMounted(() => {
	colorMode.preference = "light"
})
</script>

<template>
    <div class="__root">
		<NuxtLayout>
			<NuxtPage />
		</NuxtLayout>
		<UModal class="block sm:hidden" v-model="MobileNavigation">
			<UCard :ui="{ header: { base: `flex justify-between` } }">
				<template #header>
					<h4 class="text-xl">Документация</h4>
					<UButton icon="i-heroicons-x-mark" color="white" variant="link" @click="MobileNavigation = false" />
				</template>
				<Sidebar />
			</UCard>
		</UModal>
    </div>
</template>
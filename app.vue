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
			<UCard>
				<Sidebar />
			</UCard>
		</UModal>
    </div>
</template>
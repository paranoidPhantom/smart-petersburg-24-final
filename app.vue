<script lang="ts" setup>
const MobileNavigation = useState<boolean>("g-mobile-sidebar")
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
<script lang="ts" setup>
const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation())
</script>

<template>
    <div class="__sidebar">
		<SidebarInstance  v-for="category in navigation" :identity="category" :depth="1"/>
	</div>
</template>

<style lang="scss" scoped>
.__sidebar {
}
</style>
<script lang="ts" setup>

</script>

<template>
    <div class="__docs-layout">
		<PrimaryHeader />
		<main class="flex">
			<div class="sidebar w-72 my-2 hidden sm:flex">
				<Sidebar />
			</div>
			<slot />
		</main>
    </div>
</template>

<style lang="scss" scoped>
.sidebar {
	flex-direction: column;
	height: calc(100vh - 5rem - 1rem);
	border-right: 1px solid rgba(0, 0, 0, 0.3);
}
</style>
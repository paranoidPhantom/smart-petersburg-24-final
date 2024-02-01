<script lang="ts" setup></script>

<template>
    <div>
		<PrimaryHeader />
		<main class="flex">
			<div class="sidebar">
				<Sidebar />
			</div>
			<slot />
		</main>
    </div>
</template>

<style lang="scss" scoped>
.sidebar {
	width: 30%;
}
</style>
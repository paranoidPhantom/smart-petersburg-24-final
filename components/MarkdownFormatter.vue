<script lang="ts" setup></script>

<template>
    <div class="__md">
		<slot />
	</div>
</template>

<style lang="scss">
.__md {
	h1 {
		font-weight: 700;
		font-size: 2rem;
		margin: 1rem 0;
	}
	h2 {
		font-weight: 500;
		font-size: 1.5rem;
		margin: 0.75rem 0;
	}
	h3 {
		font-weight: 300;
		font-size: 1.2rem;
		margin: 0.5rem 0;
	}
	p {
		opacity: 0.8;
	}
}
</style>
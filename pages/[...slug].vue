<script lang="ts" setup>
definePageMeta({
	layout: 'docs'
})
</script>

<template>
    <div class="__content-page">
		<MarkdownFormatter>
			<ContentDoc />
		</MarkdownFormatter>
	</div>
</template>

<style lang="scss" scoped>
.__content-page {
	padding: 1rem;
}
</style>

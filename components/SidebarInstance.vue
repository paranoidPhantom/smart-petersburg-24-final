<script lang="ts" setup>
interface SBInstance {
	title: string;
	_path: string;
	children?: SBInstance[];
}

const { identity, depth } = defineProps<{
	identity: SBInstance;
	depth: number;
}>()

const open = ref(false)
</script>

<template>
    <div class="__sb-ins">
		<UButton variant="soft" v-if="depth > 1">

			{{ identity.title }}
		</UButton>
		<div class="children" v-if="open || depth <= 1">
			<SidebarInstance  v-for="category in identity.children" :identity="category" :depth="depth + 1"/>
		</div>
	</div>
</template>

<style lang="scss" scoped></style>

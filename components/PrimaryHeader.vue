<script lang="ts" setup>
const MobileNavigation = useState("g-mobile-sidebar")


</script>

<template>
    <header>
        <NuxtLink to="/">
            <img src="/images/header_logo.svg" class="w-32 sm:w-36" />
        </NuxtLink>
        <div class="links hidden sm:flex gap-2">
            <UButton to="https://r-ed.world/catalog" variant="link" color="white" target="_blank">Магазин</UButton>
            <UButton to="/faq" variant="link" color="white">FAQ</UButton>
        </div>
        <div class="w-0 sm:w-36 flex justify-end gap-2">
			<UButton @click="MobileNavigation = true" class="flex sm:hidden" size="xl" icon="i-heroicons-bars-3-16-solid" variant="link" />
		</div>
		
    </header>
</template>

<style lang="scss" scoped>
header {
    margin: 0 auto;
    display: flex;
    background-color: #a11916;
    height: 5rem;
    color: white;
    gap: 1rem;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
}
</style>

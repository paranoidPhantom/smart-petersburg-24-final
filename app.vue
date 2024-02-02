<script lang="ts" setup>
const MobileNavigation = useState<boolean>("g-mobile-sidebar");

const colorMode = useColorMode();

onMounted(() => {
    colorMode.preference = "light";
});

const router = useRouter()

router.afterEach(() => MobileNavigation.value = false)

useHead({
    titleTemplate: (title: string) =>
        title ? `${title} | R:ED Wiki` : `R:ED Wiki`,
});
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
                    <UButton
                        icon="i-heroicons-x-mark"
                        color="white"
                        variant="link"
                        @click="MobileNavigation = false"
                    />
                </template>
                <UButton
                    class="w-full my-2"
					label="Домашняя"
                    to="/"
                    variant="link"
                />
                <Sidebar />
            </UCard>
        </UModal>
    </div>
</template>

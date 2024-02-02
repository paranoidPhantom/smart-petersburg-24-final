<script lang="ts" setup>
interface SBInstance {
    title: string;
    _path: string;
    children?: SBInstance[];
}

const { identity, depth } = defineProps<{
    identity: SBInstance;
    depth: number;
}>();

const open = ref(false);

const isLink = computed(() => !identity.children);

const { path: pc } = useRoute();
const path = ref(pc)
const router = useRouter();

router.afterEach(() => {
	const { path: PathCurrent } = useRoute();
	path.value = PathCurrent
})


const validationCount = 3;

onMounted(() => {
    if (isLink.value) return;
    const splitCurrentPath = path.value.split("/");
    const splitPath = identity._path.split("/");
    for (let i = 1; i < validationCount; i++) {
        if (
            !splitCurrentPath[i] ||
            !splitPath[i] ||
            splitCurrentPath[i] !== splitPath[i]
        ) {
            return;
        }
    }
    open.value = true;
});
</script>

<template>
    <div class="__sb-ins">
        <UButton
            class="w-full"
            @click="isLink ? undefined : (open = !open)"
            :to="isLink ? identity._path : undefined"
            :variant="isLink ? 'link' : 'solid'"
            v-if="depth > 1"
			:class="{ 'font-black': identity._path === path }"
        >
			<!-- <UAvatar v-show="identity.icon" size="sm" :src="identity.icon" /> -->
            {{ identity.title }}
            <UIcon
                v-if="!isLink"
                :style="{ rotate: open ? `180deg` : `0deg` }"
                class="ml-auto transition-all"
                name="i-heroicons-chevron-down-16-solid"
            />
        </UButton>
        <div class="children" v-if="open || depth <= 1">
            <SidebarInstance
                v-for="category in identity.children"
                :identity="category"
                :depth="depth + 1"
            />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.children {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 0.5rem 0;
    margin-left: 1rem;
}
</style>

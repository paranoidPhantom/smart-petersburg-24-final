<script lang="ts" setup>
const MobileNavigation = useState("g-mobile-sidebar")

</script>

<template>
    <header>
        <NuxtLink to="/">
            <img src="/images/header_logo.svg" class="w-36" />
        </NuxtLink>
        <div class="links flex gap-10">
            <a href="https://r-ed.world/" target="_blank">Магазин</a>
            <NuxtLink to="/faq">FAQ</NuxtLink>
        </div>
        <div class="w-0 sm:w-36 flex justify-end">
			<UButton @click="MobileNavigation = true" class="flex sm:hidden" icon="i-heroicons-bars-3-16-solid" variant="link" />
		</div>
    </header>
</template>

<style lang="scss" scoped>
header {
    margin: 0 auto;
    display: flex;
    background-color: rgb(149, 39, 39);
    height: 5rem;
    color: white;
    gap: 1rem;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
}

.links {
    a {
        position: relative;
        color: white;
        text-decoration: none;
        &:after {
            position: absolute;
            content: "";
            width: 100%;
            height: 1px;
            top: 100%;
            left: 0;
            background: white;
            transition: transform 0.3s;
            transform: scaleX(0);
            transform-origin: right;
        }
        &:hover::after {
            transform: scaleX(1);
            transform-origin: left;
        }
    }
}
.links a:hover{
color:#EEEEEE;}





:after {
    position: absolute;
    content: "";
    width: 100%;
    height: 2px;
    top: 100%;
    left: 0;
    background: aqua;
    transition: transform 0.8s;
    transform: scaleX(0);
    transform-origin: right;
    color: #696969;
}

.navbar_links li a:hover::after {
    transform: scaleX(1);
    transform-origin: left;
    color: #696969;
}



</style>

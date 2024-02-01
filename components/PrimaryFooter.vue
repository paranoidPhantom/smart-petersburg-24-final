<script lang="ts" setup></script>

<template>
    <footer class="__footer flex justify-between items-center">
        <div class="logo">
            <NuxtLink to="/">
                <img src="/images/header_logo.svg" class="w-24 sm:w-36" />
            </NuxtLink>
        </div>
        <div class="flex flex-col">
            <a href="https://store.r-ed.world/privacy">Политика конфиденциальности</a>
            <a href="https://store.r-ed.world/public-offer">Договор публичной оферты</a>
        </div>

        <div class="flex flex-col">
            <a href="https://r-ed.world/contacts">Контакты</a>
            <a href="https://store.r-ed.world/warranty">Гарантийные обязательства</a>
        </div>

        <p><a href="https://t.me/redspbsupportbot"></a></p>
        <p class="support">Техническая поддержка</p>
    </footer>
</template>

<style lang="scss" scoped>
.__footer {
    margin-top: 1rem;
    height: 7rem;
    width: 100%;
    background-color: rgb(15, 15, 15);
    color: white;
}

.support {
    display: flex;
    margin: 0 auto;
}

.logo {
    margin-left: 30px;
    margin-top: 10px;
    flex-direction: column;
}
</style>

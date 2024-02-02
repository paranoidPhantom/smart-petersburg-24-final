<script lang="ts" setup></script>

<template>
    <div class="__footer p-4">
        <a href="https://r-ed.world">
            <img src="/images/footer_logo.png" class="w-24" />
        </a>
		<hr class="my-4 opacity-20">
        <div class="flex justify-between flex-wrap gap-8">
            <div class="flex flex-col gap-2">
                <UButton variant="link" to="https://store.r-ed.world/privacy"
                    >Политика конфиденциальности</UButton
                >
                <UButton variant="link" to="https://store.r-ed.world/public-offer"
                    >Договор публичной оферты</UButton
                >
            </div>
            <div class="flex flex-col gap-2">
                <UButton variant="link" to="https://r-ed.world/contacts">Контакты</UButton>
                <UButton variant="link" to="https://store.r-ed.world/warranty"
                    >Гарантийные обязательства</UButton
                >
            </div>
        </div>
		<hr class="my-4 opacity-20">
        <div class="flex flex-col gap-1 items-center">
            <h3 class="text-lg">Техническая поддержка</h3>
            <div class="flex gap-4">
                <UButton
                    class="w-fit"
                    to="https://t.me/redspbsupportbot"
                    target="_blank"
                    ><Icon name="simple-icons:telegram" /> В Telegram</UButton
                >
                <UButton
                    class="w-fit"
                    to="mailto:red.help@r-ed.world"
                    target="_blank"
                    ><Icon name="simple-icons:maildotru" />
                    red.help@r-ed.world</UButton
                >
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.__footer {
    margin-top: 2rem;
    min-height: 8rem;
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

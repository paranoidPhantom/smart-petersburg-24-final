<script lang="ts" setup></script>

<template>
    <div class="__home-page flex flex-col gap-4 items-center">
        <div class="__hero flex flex-col gap-4 items-center py-12">
            <div class="logo">
                <p><span class="color-primary-500">R:ED</span> Wiki</p>
            </div>
            <p class="max-w-xs sm:max-w-md">
                Производитель образовательных робототехнических комплексов для
                детей от 7 лет.
            </p>
            <UButton class="w-fit" size="xl" to="#" label="Вперёд"></UButton>
        </div>
		<h2 class="text-3xl my-2">Полезные видео</h2>
        <div class="__vids">
            <iframe
                src="https://www.youtube.com/embed/2bdm_hxyAlE"
                width="560"
                height="310"
                title="Обновленная база знаний R:ED"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
            ></iframe>

            <iframe
                src="https://www.youtube.com/embed/hGr79tO_ITU"
                width="560"
                height="310"
                title="Новый набор для образовательной робототехники R:ED X"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
            >
            </iframe>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.__home-page {
    font-family: "M PLUS Rounded 1c", sans-serif;
	.logo {
		text-align: center;
		font-size: 3.2rem;
	}
	
	.__hero{
		text-align: center;
		font-weight: 500;
	}
	
	.__vids {
		display: flex;
		gap: 2rem;
		justify-content: center;
		iframe {
			border-radius: 1rem;
		}
	}
}
</style>

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
            <UButton class="w-fit" size="xl" to="/docs/intro/getting-started" label="Вперёд" trailing-icon="i-heroicons-arrow-right-16-solid"></UButton>
			<img class="absolute -z-10 opacity-50 sm:left-auto sm:right-0 max-w-[300px] sm:max-w-[600px] blur-sm lg:blur-none" src="/images/maskot.png" alt="Maskot image">
        </div>
		<hr class="w-9/12 opacity-15 border-black">
		<h2 class="text-3xl my-2">Полезные видео</h2>
        <div class="__vids">
            <iframe
				class="w-96 h-52 sm:w-[500px] sm:h-[281px]"

                src="https://www.youtube.com/embed/2bdm_hxyAlE"
                width="560"
                height="310"
                title="Обновленная база знаний R:ED"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
            ></iframe>

            <iframe
				class="w-96 h-52 sm:w-[500px] sm:h-[281px]"

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
		display: flex;
		flex-direction: column;
		justify-content: center;

		text-align: center;
		font-weight: 500;
		min-height: calc(100vh - 5rem);
	}
	
	.__vids {
		display: flex;
		gap: 2rem;
		justify-content: center;
		flex-wrap: wrap;
		iframe {
			max-width: 90% !important;
			border-radius: 1rem;
			aspect-ratio: 16 / 9;
		}
	}
}
</style>

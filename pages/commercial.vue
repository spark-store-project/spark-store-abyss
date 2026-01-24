<script setup lang="ts">
import { onMounted, watchEffect, ref, inject } from 'vue';
import type { Ref } from '@vue/reactivity';
import type { ComponentPublicInstance } from '@vue/runtime-core';
import { range, riro } from '~/utils/index';

const scrollPanel = inject<Ref<ComponentPublicInstance>>("scrollPanel");
const sProgress = ref(0);

onMounted(() => {
  watchEffect(() => {
    const scrollTop = (
      scrollPanel?.value as unknown as { lastScrollTop: number }
    ).lastScrollTop;
    const clientHeight = scrollPanel?.value?.$el.clientHeight;
    sProgress.value = scrollTop / clientHeight;
  });
});
</script>

<template>
  <div class="page">
    <section
      class="relative flex items-center justify-center gap-10 pt-24 pb-24 sm:pb-0 flex-col sm:flex-row"
    >
      <div
        class="fixed w-full h-full s-size-4 lg:s-size-5.5 top-0 left-0 z-[-1] flex items-end sm:justify-center"
        :style="{
          opacity: 1 - range(0, 0.5, sProgress) * 2,
          '--s-n': 16,
          '--s-progress': range(0, 0.5, sProgress) * 2,
        }"
      >
        <div class="absolute top-0 left-0 flex flex-col">
          <div v-for="r in 16" :key="r" class="flex">
            <i
              v-for="c in Math.min(16, 16 - r + 3)"
              :key="`${r}-${c}`"
              class="s-dots"
              :style="{
                '--s-row': r,
                '--s-col': c,
              }"
            />
          </div>
        </div>
        <div class="absolute bottom-0 right-0 flex flex-col rotate-180">
          <div v-for="r in 16" :key="r" class="flex">
            <i
              v-for="c in Math.min(16, 16 - r + 3)"
              :key="`${r}-${c}`"
              class="s-dots"
              :style="{
                '--s-row': r,
                '--s-col': c,
                '--s-n': 16,
              }"
            />
          </div>
        </div>
      </div>
      <div
        class="card flex flex-col px-4 md:px-6 lg:px-9 rounded-tl-3xl gap-4 sm:gap-8 py-4 pb-15 sm:py-15"
      >
        <div
          class="flex gap-4 flex-col lg:flex-row justify-center sm:justify-start"
        >
          <h1
            class="font-bold text-4xl sm:text-5xl lg:text-6xl text-center sm:text-start dark:text-surface-50"
          >
            星火应用商店<br>
            <span class="text-primary-500">商业版</span>
          </h1>
        </div>
        <div
          class="flex flex-col text-surface-500 gap-1 text-lg sm:text-xl text-center sm:text-start dark:text-surface-200"
        >
          <p>为企业客户提供专业的应用商店解决方案，</p>
          <p>支持定制化服务和多架构部署，</p>
          <p>助力企业构建完善的软件分发体系。</p>
        </div>
      </div>
    </section>

    <section
      class="flex flex-col items-center justify-center gap-8 lg:gap-10 px-8 pb-24 pt-24"
    >
      <div
        class="flex items-center justify-center self-start sm:self-center gap-6"
      >
        <h2
          class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-primary-color font-bold leading-[1.3] dark:text-primary-400"
        >
          商业版优势
        </h2>
      </div>
      <div
        class="flex gap-4 lg:gap-16 max-w-full flex-col sm:flex-row items-center grow-1 sm:grow-0"
      >
        <div
          class="flex flex-col py-0 sm:py-8 lg:py-12 gap-6 items-center sm:items-start"
        >
          <div
            class="flex flex-col text-center sm:text-start items-center sm:items-start"
          >
            <p
              class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-[1.5]"
            >
              专业定制服务
            </p>
            <p
              class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.5] whitespace-nowrap"
            >
              满足企业个性化需求
            </p>
          </div>
          <p
            class="text-base sm:text-lg text-center sm:text-start text-surface-700 leading-[2] max-w-[31.8em] dark:text-surface-200"
          >
            商业版提供专属定制服务，可根据企业需求修改应用商店名称、logo、主题风格等，打造独一无二的企业级应用商店，提升企业品牌形象。
          </p>
        </div>
      </div>
    </section>

    <section
      class="flex flex-col items-center justify-center gap-8 lg:gap-10 px-8 pb-24 pt-24"
    >
      <div
        class="flex gap-4 lg:gap-16 max-w-full flex-col sm:flex-row items-center grow-1 sm:grow-0"
      >
        <div
          class="flex flex-col py-0 sm:py-8 lg:py-12 gap-6 items-center sm:items-start"
        >
          <div
            class="flex flex-col text-center sm:text-start items-center sm:items-start"
          >
            <p
              class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-[1.5]"
            >
              多架构支持
            </p>
            <p
              class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.5] whitespace-nowrap"
            >
              全平台覆盖
            </p>
          </div>
          <p
            class="text-base sm:text-lg text-center sm:text-start text-surface-700 leading-[2] max-w-[31.8em] dark:text-surface-200"
          >
            商业版支持 amd64、arm64、loongarch64 等多种 CPU 架构部署，可在不同硬件平台上稳定运行，满足企业多样化的部署需求。
          </p>
          <div class="flex flex-wrap gap-4 mt-4">
            <div class="px-4 py-2 bg-primary-200 rounded-full dark:bg-primary-900">amd64</div>
            <div class="px-4 py-2 bg-primary-200 rounded-full dark:bg-primary-900">arm64</div>
            <div class="px-4 py-2 bg-primary-200 rounded-full dark:bg-primary-900">loongarch64</div>
          </div>
        </div>
      </div>
    </section>

    <section
      class="flex flex-col items-center justify-center gap-8 lg:gap-10 px-8 pb-24 pt-24"
    >
      <div
        class="flex gap-4 lg:gap-16 max-w-full flex-col sm:flex-row items-center grow-1 sm:grow-0"
      >
        <div
          class="flex flex-col py-0 sm:py-8 lg:py-12 gap-6 items-center sm:items-start"
        >
          <div
            class="flex flex-col text-center sm:text-start items-center sm:items-start"
          >
            <p
              class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-[1.5]"
            >
              跨发行版支持
            </p>
            <p
              class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.5] whitespace-nowrap"
            >
              广泛兼容各类 Linux 发行版
            </p>
          </div>
          <p
            class="text-base sm:text-lg text-center sm:text-start text-surface-700 leading-[2] max-w-[31.8em] dark:text-surface-200"
          >
            商业版提供 APM 包，支持跨多种 Linux 发行版安装和使用，包括统信 UOS、中科方德、银河麒麟等主流国产 Linux 操作系统。
          </p>
          <div class="flex flex-wrap gap-4 mt-4">
            <div class="px-4 py-2 bg-primary-200 rounded-full dark:bg-primary-900">统信 UOS</div>
            <div class="px-4 py-2 bg-primary-200 rounded-full dark:bg-primary-900">中科方德</div>
            <div class="px-4 py-2 bg-primary-200 rounded-full dark:bg-primary-900">银河麒麟</div>
          </div>
        </div>
      </div>
    </section>

    <section
      class="flex flex-col items-center justify-center gap-8 lg:gap-10 px-8 pb-24 pt-24"
    >
      <div
        class="flex items-center justify-center self-start sm:self-center gap-6"
      >
        <h2
          class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-primary-color font-bold leading-[1.3] dark:text-primary-400"
        >
          发行版支持
        </h2>
      </div>
      <div
        class="flex flex-wrap justify-center gap-8 lg:gap-16 max-w-full py-8"
      >
        <div class="flex flex-col items-center gap-4 p-6 bg-primary-200 rounded-2xl dark:bg-primary-900">
          <div class="w-24 h-24 bg-white rounded-full flex items-center justify-center dark:bg-surface-800">
            <span class="text-3xl font-bold text-primary-500">统信</span>
          </div>
          <h3 class="text-xl font-bold dark:text-surface-100">统信 UOS</h3>
          <p class="text-center text-sm dark:text-surface-200">专业的国产 Linux 操作系统</p>
        </div>
        <div class="flex flex-col items-center gap-4 p-6 bg-primary-200 rounded-2xl dark:bg-primary-900">
          <div class="w-24 h-24 bg-white rounded-full flex items-center justify-center dark:bg-surface-800">
            <span class="text-3xl font-bold text-primary-500">中科方德</span>
          </div>
          <h3 class="text-xl font-bold dark:text-surface-100">中科方德</h3>
          <p class="text-center text-sm dark:text-surface-200">安全可靠的 Linux 发行版</p>
        </div>
        <div class="flex flex-col items-center gap-4 p-6 bg-primary-200 rounded-2xl dark:bg-primary-900">
          <div class="w-24 h-24 bg-white rounded-full flex items-center justify-center dark:bg-surface-800">
            <span class="text-3xl font-bold text-primary-500">银河麒麟</span>
          </div>
          <h3 class="text-xl font-bold dark:text-surface-100">银河麒麟</h3>
          <p class="text-center text-sm dark:text-surface-200">高性能的国产操作系统</p>
        </div>
      </div>
    </section>

    <section
      class="flex flex-col items-center justify-center gap-8 lg:gap-10 px-8 pb-24 pt-24"
    >
      <div
        class="flex items-center justify-center self-start sm:self-center gap-6"
      >
        <h2
          class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-primary-color font-bold leading-[1.3] dark:text-primary-400"
        >
          联系我们
        </h2>
      </div>
      <div
        class="flex gap-4 lg:gap-16 max-w-full flex-col sm:flex-row items-center grow-1 sm:grow-0"
      >
        <div
          class="flex flex-col py-0 sm:py-8 lg:py-12 gap-6 items-center sm:items-start"
        >
          <div
            class="flex flex-col text-center sm:text-start items-center sm:items-start"
          >
            <p
              class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-[1.5]"
            >
              定制化报价
            </p>
            <p
              class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.5] whitespace-nowrap"
            >
              按需提供解决方案
            </p>
          </div>
          <p
            class="text-base sm:text-lg text-center sm:text-start text-surface-700 leading-[2] max-w-[31.8em] dark:text-surface-200"
          >
            商业版采用定制化报价模式，根据企业客户的具体需求（如定制程度、部署规模、技术支持要求等）提供个性化解决方案。
            请联系我们的客服团队，详细沟通您的需求，我们将为您提供专业的咨询服务和合理的报价方案。
          </p>
          <div class="flex gap-4 mt-6">
            <a
              href="mailto:commercial@spark-app.store"
              class="px-8 py-3 text-xl font-bold text-white from-primary-400 to-primary-500 bg-linear-to-r rounded-full dark:from-primary-500 dark:to-primary-600"
            >
              <i class="pi pi-envelope text-xl! font-bold! pr-4" /> 联系客服
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
section {
  width: 100%;
  height: 100vh;
  scroll-snap-align: start;
}
</style>
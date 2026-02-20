<script setup lang="ts">
import { onMounted, watchEffect, ref, inject } from 'vue';
import type { Ref } from '@vue/reactivity';
import type { ComponentPublicInstance } from '@vue/runtime-core';
import { range, riro } from '~/utils/index';
import CustomizationIllustration from '~/components/illustrations/CustomizationIllustration.vue';
import ArchitectureIllustration from '~/components/illustrations/ArchitectureIllustration.vue';
import ContactIllustration from '~/components/illustrations/ContactIllustration.vue';
import DistributionIllustration from '~/components/illustrations/DistributionIllustration.vue';

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
          <p>为政府、企事业单位客户提供专业的应用商店解决方案，</p>
          <p>- 支持安装在主流信创设备上</p>
          <p>- 支持定制客户端和服务器端本地部署</p>
          <p>- 支持指定软件适配服务（如：Windows软件迁移到信创设备）</p>
          <p>助力客户构建完善的软件分发体系。</p>
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
        <div class="w-full max-w-[400px] h-[300px] text-primary-500 dark:text-primary-400">
          <CustomizationIllustration />
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
            <div class="px-4 py-2 bg-primary-200 rounded-full dark:bg-primary-900">龙芯</div>
            <div class="px-4 py-2 bg-primary-200 rounded-full dark:bg-primary-900">兆芯</div>
            <div class="px-4 py-2 bg-primary-200 rounded-full dark:bg-primary-900">飞腾</div>
            <div class="px-4 py-2 bg-primary-200 rounded-full dark:bg-primary-900">海光</div>
            <div class="px-4 py-2 bg-primary-200 rounded-full dark:bg-primary-900">华为麒麟、华为鲲鹏</div>
          </div>
        </div>
        <div class="w-full max-w-[400px] h-[300px] text-primary-500 dark:text-primary-400">
          <ArchitectureIllustration />
        </div>
      </div>
    </section>

    <section
      class="flex flex-col items-center justify-center gap-8 lg:gap-10 px-8 pb-24 pt-24"
    >
      <div
        class="flex gap-4 lg:gap-16 max-w-full flex-col sm:flex-row-reverse items-center grow-1 sm:grow-0"
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
              适配主流 Linux 发行版
            </p>
          </div>
          <p
            class="text-base sm:text-lg text-center sm:text-start text-surface-700 leading-[2] max-w-[31.8em] dark:text-surface-200"
          >
            商业版支持多种主流 国产操作系统，包括但不限于统信UOS、银河麒麟、中科方德等，确保在不同发行版环境下都能稳定运行，为企业提供全生态覆盖的应用商店解决方案。
          </p>
          <div class="flex flex-wrap gap-4 mt-4">
            <div class="px-4 py-2 bg-primary-200 rounded-full dark:bg-primary-900">统信UOS</div>
            <div class="px-4 py-2 bg-primary-200 rounded-full dark:bg-primary-900">银河麒麟</div>
            <div class="px-4 py-2 bg-primary-200 rounded-full dark:bg-primary-900">中科方德</div>
          </div>
        </div>
        <div class="w-full max-w-[400px] h-[300px] text-primary-500 dark:text-primary-400">
          <DistributionIllustration />
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
        <div class="w-full max-w-[400px] h-[300px] text-primary-500 dark:text-primary-400">
          <ContactIllustration />
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
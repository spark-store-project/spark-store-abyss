<script setup lang="ts">
const selectedArch = ref("amd64");
const archList = [
  { name: "Intel/AMD 架构（amd64）", value: "amd64" },
  { name: "ARM 架构（arm64）", value: "arm64" },
  { name: "龙架构·新世界（loong64）", value: "loong64" },
];
</script>

<template>
  <div class="page flex flex-col items-center relative justify-between">
    <div
      class="pt-27 flex flex-col justify-center flex-grow relative w-full overflow-hidden gap-10"
    >
      <div class="flex flex-col">
        <h1 class="text-center text-5xl font-bold text-primary-color">
          下载星火应用商店
        </h1>
        <p class="text-center text-lg leading-[2]">
          基于 DTK 框架构建星火应用商店客户端，极小安装包体积，让 Linux
          生态触手可及。
        </p>
      </div>
      <div class="flex justify-center gap-6">
        <div class="flex flex-col gap-2">
          <p class="text-1.8xl font-bold">
            在这里选择计算机架构 <i class="pi pi-question-circle"></i>
          </p>
          <Select
            v-model="selectedArch"
            :options="archList"
            option-label="name"
            option-value="value"
            class="min-w-72 border-2! s-deco-primary-color s-bg-primary-200 s-bg-2-primary-400 s-bg-3-secondary-600 dark:s-bg-primary-900 dark:s-bg-2-secondary-700 dark:s-bg-3-secondary-500"
            :style="{
              '--p-select-border-radius': 'calc(3 * var(--spacing))',
              '--p-select-border-color': 'var(--s-bg-2)',
              '--p-select-hover-border-color': 'var(--s-bg-3)',
              '--p-select-background': 'var(--s-bg)',
              '--p-select-color': 'var(--s-deco)',
              '--p-select-dropdown-color': 'var(--s-deco)',
            }"
            :pt="{
              overlay: {
                style: {
                  transform: 'translateY(calc(2 * var(--spacing)))',
                  '--p-select-overlay-border-radius':
                    'calc(3 * var(--spacing))',
                  '--p-select-overlay-border-color': 'transparent',
                  '--p-select-option-border-radius': 'calc(2 * var(--spacing))',
                  '--p-select-option-selected-background': 'transparent',
                },
              },
            }"
          />
        </div>
        <button
          class="relative items-start flex flex-col py-2 pl-4 pr-26 text-2xl font-bold text-white rounded-2xl overflow-hidden from-primary-400 to-primary-500 bg-linear-to-r dark:from-primary-500 dark:to-primary-600"
        >
          <p class="translate-y-0.5">下载最新版本</p>
          <p class="text-lg opacity-75">V4.5.2 | 2025-03-15</p>
          <Icon
            name="sp:spark"
            class="absolute top-0 right-0 s-color-primary-200 w-20 translate-x-1/6 -translate-y-2/9 opacity-60"
            mode="svg"
            :style="{
              height: 'auto',
            }"
          />
        </button>
        <button
          class="relative items-center gap-2 flex py-2 px-4 font-bold rounded-2xl overflow-hidden from-primary-400 to-primary-500 bg-linear-to-r dark:from-primary-500 dark:to-primary-600 before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:border-5 before:border-[transparent] before:rounded-2xl before:bg-white before:bg-clip-content before:opacity-50 dark:before:bg-secondary-950 dark:before:opacity-80"
        >
          <Icon name="proicons:terminal" class="text-primary-500 text-6xl" />
          <div class="flex flex-col items-start">
            <p class="text-xl text-primary-color z-[0]">下载终端版</p>
            <p class="text-sm text-primary-color opacity-50">
              全平台支持 仅包含基本功能
            </p>
          </div>
        </button>
      </div>
      <div class="flex flex-col items-center justify-center gap-2">
        <div class="flex gap-8 font-bold text-lg">
          <a
            class="border-b-2 border-primary-500 hover:border-primary-color"
            href="https://gitee.com/spark-store-project/spark-store/releases"
            >查看更新日志</a
          >
          <a
            class="border-b-2 border-primary-500 hover:border-primary-color"
            href="https://gitee.com/spark-store-project/spark-store"
            >访问 Gitee 源码仓库</a
          >
          <a
            class="border-b-2 border-primary-500 hover:border-primary-color"
            href="https://github.com/spark-store-project/spark-store"
            >访问 GitHub 源码仓库</a
          >
        </div>
        <p class="opacity-60">
          星火应用商店遵循 GNU GPLv3 协议开放源代码，<a
            href="https://gitee.com/spark-store-project/spark-store/blob/dev/LICENSE"
            class="text-primary-color underline"
            >点此阅读版权声明</a
          >
        </p>
      </div>

      <div
        class="absolute w-[500vw] h-[500vw] rounded-full bottom-0 left-1/2 transform -translate-x-1/2 z-[-2] bg-primary-100 dark:opacity-10 dark:bg-primary-500"
      ></div>

      <Icon
        name="sp:spark"
        class="absolute top-0 left-0 z-[-1] s-color-primary-200 w-120 -translate-x-2/7 -translate-y-1/4 dark:opacity-10 dark:s-color-primary-500"
        mode="svg"
        :style="{
          height: 'auto',
        }"
      />
    </div>
    <div class="flex gap-36 py-8">
      <div class="flex flex-col gap-4">
        <h1 class="text-3xl font-bold">使⽤时遇到问题？<br /></h1>
        <p class="text-lg leading-[2] max-w-[40.8em]">
          敬请参阅<NuxtLink to="/faq" class="text-primary-color underline"
            >星火应用商店 FAQ 与支持指南</NuxtLink
          >。如果您有其他问题或建议，可以通过论坛、交流群或电子邮件等方式与我们取得联系；此外，也可以在源码仓库
          Issue 页面上提交反馈。
        </p>
      </div>
      <Icon
        name="s:download-deco"
        class="s-deco-secondary-900 s-bg-primary-200 scale-120 dark:s-deco-secondary-100 dark:s-bg-primary-500"
        mode="svg"
        :style="{
          height: '100%',
          width: 'auto',
        }"
      />
    </div>
  </div>
</template>

<style scoped>
.page {
  width: 100%;
  height: 100vh;
  scroll-snap-align: start;
}
</style>

<style>
.p-select-option.p-select-option-selected {
  font-weight: bold;
}
</style>

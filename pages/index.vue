<script setup lang="ts">
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
    <section class="relative flex items-center justify-center gap-10">
      <div
        class="fixed w-full h-full top-0 left-0 z-[-1] flex items-end justify-center"
        :style="{
          opacity: Math.max(0, (1 - sProgress * 2) * 1),
          '--s-size': 5.5,
          '--s-n': 16,
          '--s-progress': Math.min(1, sProgress * 2),
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
                '--s-size': 5.5,
                '--s-n': 16,
              }"
            />
          </div>
        </div>
        <div
          class="flex flex-col items-center justify-center mb-10 text-(--p-secondary-400) text-lg gap-2 tracking-[0.5em] transition-all duration-[.03s]"
          :style="{
            transform: `translateY(${Math.min(0, sProgress * -500)}%)`,
          }"
        >
          <p>了解更多</p>
          <i class="pi pi-angle-down"></i>
        </div>
      </div>
      <i class="w-96 h-144 figure-container" />
      <div class="card flex flex-col px-9 py-15 rounded-tl-3xl gap-8">
        <div class="flex gap-4">
          <h1 class="font-bold text-6xl leading-[0.9] -translate-y-1/20">
            星火应用商店
          </h1>
          <div class="flex flex-col items-start justify-between">
            <span
              class="font-[KNYuanmo] px-4 py-0.5 text-white from-(--p-primary-400) to-(--p-primary-500) bg-linear-to-r rounded-full"
              >V4.5.2</span
            >
            <h2
              class="text-lg font-[KNYuanmo] text-(--p-primary-500) leading-[0.8]"
            >
              SPARK STORE
            </h2>
          </div>
        </div>
        <div class="flex -mt-3 gap-2">
          <img
            src="https://gitee.com/spark-store-project/spark-store/badge/star.svg?theme=gvp"
          />
          <img
            src="https://gitee.com/spark-store-project/spark-store/badge/fork.svg?theme=gvp"
          />
        </div>
        <div class="flex flex-col text-xl text-(--p-surface-500) gap-1">
          <p>适用于 Debian 社区和其他 Linux 发行版的社区应用商店；</p>
          <p>从社区中来，到社区中去，聚星星之火，成燎原之势。</p>
          <p class="text-lg font-bold text-black">
            🎉星火应用商店吉祥物「星小火」现已上线！
            <a class="text-(--p-secondary-600)">了解更多 →</a>
          </p>
        </div>
        <div class="flex gap-4">
          <NuxtLink
            to="/download"
            class="px-14 py-2.5 text-2xl font-bold text-white from-(--p-primary-400) to-(--p-primary-500) bg-linear-to-r rounded-full"
          >
            <i class="pi pi-download text-xl! font-bold!" /> 前往下载
          </NuxtLink>
          <a
            class="px-2.5 bg-(--p-primary-200) border-(--p-primary-400) border-4 rounded-full flex items-center justify-center"
            href="https://gitee.com/spark-store-project"
          >
            <Icon
              name="simple-icons:gitee"
              class="text-2xl! font-bold! text-(--p-primary-600)"
            />
          </a>
          <a
            class="px-2.5 bg-(--p-primary-200) border-(--p-primary-400) border-4 rounded-full flex items-center justify-center"
          >
            <i
              class="pi pi-github text-2xl! font-bold! text-(--p-primary-600)"
            />
          </a>
        </div>
      </div>
    </section>
    <section></section>
    <section></section>
    <section></section>
    <section></section>
    <section></section>
    <section></section>
    <section></section>
  </div>
</template>

<style scoped>
section {
  width: 100%;
  height: 100vh;
}

.s-dots {
  width: calc(var(--s-size) * var(--spacing));
  height: calc(var(--s-size) * var(--spacing));
  background-image: linear-gradient(135deg, #ff7682, #ffc950);
  background-size: calc(calc(var(--s-size) * var(--spacing)) * var(--s-n))
    calc(calc(var(--s-size) * var(--spacing)) * var(--s-n));
  background-position: calc(
      -1 * (var(--s-col) - 1) * var(--s-size) * var(--spacing)
    )
    calc(-1 * (var(--s-row) - 1) * var(--s-size) * var(--spacing));
  border-radius: 50%;
  transform: scale(
    calc(
      (0.4 - 0.018 * (var(--s-row) + var(--s-col))) * (1 - var(--s-progress))
    )
  );
}

.figure-container {
  background-image: url("~/assets/images/index/figure.png");
  background-image: url("~/assets/images/index/figure.webp");
  background-image: url("~/assets/images/index/figure.avif");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}

.card {
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    background-image: linear-gradient(
      135deg,
      var(--p-primary-400),
      transparent 42%
    );
    z-index: -2;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    background-image: linear-gradient(
      135deg,
      var(--p-primary-300),
      var(--s-background) 36%
    );
    background-clip: padding-box;
    border: 3px solid transparent;
    z-index: -1;
  }
}
</style>

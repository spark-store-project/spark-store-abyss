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
          opacity: 1 - range(0, 0.5, sProgress) * 2,
          '--s-size': 5.5,
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
                '--s-size': 5.5,
                '--s-n': 16,
              }"
            />
          </div>
        </div>
        <div
          class="flex flex-col items-center justify-center mb-10 text-(--p-secondary-400) text-lg gap-2 tracking-[0.5em] transition-all duration-[.03s]"
          :style="{
            transform: `translateY(${range(0, 0.5, sProgress) * -500}%) scale(${
              1 + range(0, 0.5, sProgress) * 0.2
            })`,
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
            class="px-12 py-2.5 text-2xl font-bold text-white from-(--p-primary-400) to-(--p-primary-500) bg-linear-to-r rounded-full"
          >
            <i class="pi pi-download text-xl! font-bold! pr-4" /> 前往下载
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
    <section
      class="flex flex-col justify-center items-center gap-8 relative pt-15"
    >
      <div class="fixed top-0 left-0 w-full h-full z-[-1]">
        <div
          class="absolute top-0 left-0 w-full h-full flex justify-between items-center s2d"
          :style="{
            transform: `rotate(${
              (riro(range(-0.5, 0.5, sProgress - 1) + 0.5) - 0.5) * -60
            }deg)`,
            opacity:
              1 -
              Math.abs(riro(range(-0.5, 0.5, sProgress - 1) + 0.5) - 0.5) * 2,
          }"
        ></div>
        <div
          class="absolute bottom-0 left-1/2 -translate-x-1/2 rounded-t-4xl px-6 pt-4 flex gap-6 from-(--p-primary-300) to-[transparent] bg-linear-to-b after:from-(transparent) after:from-50 after:to-(--s-to) after:bg-linear-to-b after:absolute after:top-0 after:left-0 after:w-full after:h-full after:z-2"
          style="
            --s-to: color-mix(in srgb, var(--s-background), transparent 20%);
          "
          :style="{
            transform: `translateY(${
              range(-0.5, 0.5, sProgress - 1) * -100
            }%) scale(${1 + range(-0.5, 0.5, sProgress - 1) * 0.2})`,
            opacity: 1 - Math.abs(range(-0.5, 0.5, sProgress - 1)) * 2,
          }"
        >
          <div
            class="flex flex-col items-center justify-between mt-2 mb-6 gap-5"
          >
            <h2
              class="text-3xl text-(--p-primary-500) font-[KNYuanmo] tracking-widest"
            >
              SPARK
            </h2>

            <div
              v-for="i in 3"
              :key="i"
              class="w-full rounded-full p-3 from-(--p-primary-400) to-(--p-primary-200) bg-linear-to-b"
            ></div>
          </div>
          <div class="flex flex-col gap-4 w-full">
            <div class="flex gap-4 pl-2">
              <div
                v-for="i in 2"
                :key="i"
                class="p-3 rounded-full bg-(--p-primary-500)"
              ></div>

              <div class="w-40 p-3 rounded-full bg-(--p-primary-500)"></div>

              <div class="grow-1"></div>

              <div
                v-for="i in 3"
                :key="i"
                class="p-3 rounded-full bg-(--p-primary-500)"
              ></div>
            </div>

            <div
              class="rounded-t-2xl p-4 flex gap-4 w-full from-(--p-primary-400) to-[transparent] bg-linear-to-b grow-1"
            >
              <div
                v-for="i in 3"
                :key="i"
                class="w-45 h-27 rounded-xl flex items-center justify-center from-(--p-primary-500) to-(--p-primary-300) bg-linear-to-b"
              >
                <i
                  class="pi text-5xl! text-(--p-primary-600)"
                  :class="`pi-${['th-large', 'cog', 'thumbs-up'][i - 1]}`"
                ></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h2 class="text-center text-6xl font-bold text-(--p-primary-color)">
        星星之火，可以燎原。
      </h2>
      <p class="text-center text-xl leading-[2em]">
        每个普通用户的需求反馈、每名开发者的代码贡献、每一次社区的互助分享，<br />
        都在为 Linux 桌面生态注入蓬勃活力。<br />
        我们深信“人人为我，我为人人”，以共享之火照亮开源之路。<br />
        您上传的应用可能成为他人工作的桥梁，他人分享的工具也可能为您带来方便。<br />
        我们珍视开源世界的共建基因，以微小而持久的善意融入这场共享长跑，<br />
        让技术普惠的星火在彼此照映中汇聚成光。
      </p>
      <div class="h-24"></div>
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
  scroll-snap-align: start;
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
      var(--s-background) 36%,
      var(--s-background) 50%,
      transparent
    );
    background-clip: padding-box;
    border: 3px solid transparent;
    z-index: -1;
  }
}

.s2d {
  &::before {
    content: "";
    width: calc(64 * var(--spacing));
    height: calc(128 * var(--spacing));
    background-image: url("~/assets/images/index/s2d.avif");
    background-image: url("~/assets/images/index/s2d.webp");
    background-image: url("~/assets/images/index/s2d.png");
    background-size: contain;
    background-position: center;
  }
  &::after {
    content: "";
    width: calc(64 * var(--spacing));
    height: calc(128 * var(--spacing));
    background-image: url("~/assets/images/index/s2d.avif");
    background-image: url("~/assets/images/index/s2d.webp");
    background-image: url("~/assets/images/index/s2d.png");
    background-size: contain;
    background-position: center;
    transform: rotate(180deg);
  }
}
</style>

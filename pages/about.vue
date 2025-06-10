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
  <div
    class="page bg-primary-100"
    :style="{
      transform: sProgress > 6 ? 'translate(0)' : 'none',
    }"
  >
    <section
      class="flex w-full h-screen snap-start pt-27 pb-42 px-24 items-center justify-center gap-8"
    >
      <!-- 左侧文字区域 -->
      <div class="flex flex-col items-start gap-6">
        <div class="flex items-center justify-center gap-6">
          <h2
            class="text-5xl text-primary-color font-bold leading-[1.3] dark:text-primary-400"
          >
            关于星火社区&nbsp;&nbsp;
            <span
              class="font-(family-name:--s-title-font) text-primary-400 font-normal dark:opacity-50"
            >
              ABOUT US
            </span>
          </h2>
        </div>
        <div class="flex flex-col dark:text-surface-200">
          <p class="text-lg font-bold indent-[2em]">
            星火社区是由一群专注于改善国内Linux应用生态的开发者组成的开源协作团队。
          </p>
          <p class="text-lg indent-[2em]">
            我们以解决 Linux
            软件生态匮乏、资源分散为核心目标，通过技术整合与协作创新，致力于降低
            Linux 发行版的使用门槛。团队的核心成果<span class="font-bold"
              >「星火应用商店」</span
            >整合了海量分散的 Linux 应用资源，覆盖各类应用程序。同时开发的
            <span class="font-bold"
              >GXDE OS、Wine 运⾏器、Amber CE 兼容环境</span
            >等项目，均围绕“让 Linux 更易用”的理念丰富用户体验。
          </p>
          <p class="text-lg indent-[2em]">
            我们坚持开放协作原则，欢迎每一位认同开源理念、愿意为开源生态添砖加瓦的伙伴，无论是贡献一行代码、一份文档、一个测试反馈，还是一种新的思路……
          </p>
          <p class="text-lg indent-[2em]">
            <span class="font-bold">
              我们坚信，小小的努力都可以汇成巨大的洪流，星星之火必将燎原。</span
            >我们期待通过社区用户的互助和支持，让星火计划的火焰持续燃烧，为
            Linux 生态系统带来持续的活力。
          </p>
        </div>
      </div>

      <!-- 右侧图片区域 -->
      <Icon
        name="s:about-deco"
        class="shrink-0 s-deco-secondary-900 s-bg-primary-200 dark:s-deco-secondary-100 dark:s-bg-primary-500"
        mode="svg"
        :style="{ height: '80%', width: 'auto' }"
      />
    </section>
    <div v-for="i in 6" :key="i" class="w-full h-screen snap-start" />
    <nav
      class="flex justify-center gap-14 fixed bottom-0 z-[0] w-full h-45 bg-primary-50 transition-transform duration-100 pointer-events-none"
      :style="{
        transform: `translateY(calc(${-range(
          0,
          1,
          sProgress
        )} * (100vh - 15 * var(--spacing) - 100%)))`,
      }"
    >
      <div
        class="relative flex gap-14 items-center"
        :style="{
          translate: `calc(${
            25 - 25 * range(0, 1, sProgress)
          } * var(--spacing)) 0`,
        }"
      >
        <h2
          class="absolute left-0 -translate-x-[calc(100%+14*var(--spacing))] font-(family-name:--s-title-font) text-4xl text-primary-400 w-36 self-center pointer-events-auto"
          :style="{
            transform: `translateX(calc(${
              25 * range(0, 1, sProgress)
            } * var(--spacing))`,
            opacity: 1 - range(0, 1, sProgress),
          }"
        >
          点击了解<br />星火软件
        </h2>
        <Icon
          name="s:about-indicator"
          class="absolute left-3 bottom-0 w-20 h-[auto]! s-color-primary-100"
          mode="svg"
          :style="{
            transform: `translateX(calc(${
              40 * (sProgress - 1)
            } * var(--spacing))`,
            opacity:
              (range(0, 0.5, sProgress - 0.5) -
                range(0, 0.5, sProgress - 6.5)) *
              2,
          }"
        />
        <div class="relative p-5 rounded-full bg-white pointer-events-auto">
          <Icon
            name="sp:spark"
            class="w-16 h-16 s-color-primary-color"
            mode="svg"
          />
          <div
            class="absolute p-5 w-full h-full rounded-full top-0 left-0 from-primary-400 to-primary-500 bg-linear-to-br"
            :style="{
              clipPath:
                sProgress <= 1
                  ? `circle(${range(0, 1, sProgress) * 108}% at left 20%)`
                  : `circle(${
                      (2 - range(1, 2, sProgress)) * 108
                    }% at right 80%)`,
            }"
          >
            <Icon name="sp:spark" class="w-16 h-16 s-color-white" mode="svg" />
          </div>
        </div>
        <div class="relative p-5 rounded-full bg-white pointer-events-auto">
          <Icon
            name="s:gxde"
            class="w-16 h-16 s-deco-primary-color s-bg-primary-400"
            mode="svg"
          />
          <div
            class="absolute p-5 w-full h-full rounded-full top-0 left-0 from-primary-400 to-primary-500 bg-linear-to-br"
            :style="{
              clipPath:
                sProgress <= 2
                  ? `circle(${range(0, 1, sProgress - 1) * 108}% at left 20%)`
                  : `circle(${
                      (3 - range(2, 3, sProgress)) * 108
                    }% at right 80%)`,
            }"
          >
            <Icon
              name="s:gxde"
              class="w-16 h-16 s-deco-white s-bg-[rgba(255,255,255,0.5)]"
              mode="svg"
            />
          </div>
        </div>
        <div class="relative p-5 rounded-full bg-white pointer-events-auto">
          <Icon
            name="s:wine-runner"
            class="w-16 h-16 s-deco-primary-color s-bg-primary-400"
            mode="svg"
          />
          <div
            class="absolute p-5 w-full h-full rounded-full top-0 left-0 from-primary-400 to-primary-500 bg-linear-to-br"
            :style="{
              clipPath:
                sProgress <= 3
                  ? `circle(${range(0, 1, sProgress - 2) * 108}% at left 20%)`
                  : `circle(${
                      (4 - range(3, 4, sProgress)) * 108
                    }% at right 80%)`,
            }"
          >
            <Icon
              name="s:wine-runner"
              class="w-16 h-16 s-deco-white s-bg-[rgba(255,255,255,0.5)]"
              mode="svg"
            />
          </div>
        </div>
        <div class="relative p-5 rounded-full bg-white pointer-events-auto">
          <Icon
            name="s:amber-ce"
            class="w-16 h-16 s-deco-primary-color"
            mode="svg"
          />
          <div
            class="absolute p-5 w-full h-full rounded-full top-0 left-0 from-primary-400 to-primary-500 bg-linear-to-br"
            :style="{
              clipPath:
                sProgress <= 4
                  ? `circle(${range(0, 1, sProgress - 3) * 108}% at left 20%)`
                  : `circle(${
                      (5 - range(4, 5, sProgress)) * 108
                    }% at right 80%)`,
            }"
          >
            <Icon name="s:amber-ce" class="w-16 h-16 s-deco-white" mode="svg" />
          </div>
        </div>
        <div class="relative p-7 rounded-full bg-white pointer-events-auto">
          <Icon
            name="s:package-manager"
            class="w-12 h-12 s-deco-primary-color s-bg-primary-400"
            mode="svg"
          />
          <div
            class="absolute p-7 w-full h-full rounded-full top-0 left-0 from-primary-400 to-primary-500 bg-linear-to-br"
            :style="{
              clipPath:
                sProgress <= 5
                  ? `circle(${range(0, 1, sProgress - 4) * 108}% at left 20%)`
                  : `circle(${
                      (6 - range(5, 6, sProgress)) * 108
                    }% at right 80%)`,
            }"
          >
            <Icon
              name="s:package-manager"
              class="w-12 h-12 s-deco-white s-bg-[rgba(255,255,255,0.5)]"
              mode="svg"
            />
          </div>
        </div>
        <div class="relative p-5 rounded-full bg-white pointer-events-auto">
          <Icon
            name="s:fantascene"
            class="w-16 h-16 s-deco-primary-color s-bg-white"
            mode="svg"
          />
          <div
            class="absolute p-5 w-full h-full rounded-full top-0 left-0 from-primary-400 to-primary-500 bg-linear-to-br"
            :style="{
              clipPath:
                sProgress <= 6
                  ? `circle(${range(0, 1, sProgress - 5) * 108}% at left 20%)`
                  : `circle(${
                      (7 - range(6, 7, sProgress)) * 108
                    }% at right 80%)`,
            }"
          >
            <Icon
              name="s:fantascene"
              class="w-16 h-16 s-deco-white s-bg-primary-400"
              mode="svg"
            />
          </div>
        </div>
      </div>
    </nav>
    <div
      class="fixed bottom-0 z-[0] flex h-[calc(100vh-60*var(--spacing))] bg-primary-100 pointer-events-none transition-transform duration-100"
      :style="{
        transform: `translateY(${
          100 - range(0, 1, sProgress) * 100
        }%) translateX(${-100 * (range(1, 6, sProgress) - 1)}vw)`,
      }"
    >
      <section class="flex w-screen h-full items-center justify-center gap-16">
        <div class="relative w-130 h-92 bg-white rounded-3xl"></div>
        <div class="flex w-134 h-92 bg-white pointer-events-auto">
          <div class="flex"></div>
        </div>
      </section>
      <section class="flex w-screen h-full item-center justify-center">
        2
      </section>
      <section class="flex w-screen h-full item-center justify-center">
        3
      </section>
      <section class="flex w-screen h-full item-center justify-center">
        4
      </section>
      <section class="flex w-screen h-full item-center justify-center">
        5
      </section>
      <section class="flex w-screen h-full item-center justify-center">
        6
      </section>
    </div>
  </div>
</template>

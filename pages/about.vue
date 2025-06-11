<script setup lang="ts">
const scrollPanel = inject<Ref<ComponentPublicInstance>>("scrollPanel");
const sDark = inject<ComputedRef<boolean>>("sDark");
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

function scrollIntoView(id: string) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
}
</script>

<template>
  <div
    class="page bg-primary-100 bg-dark"
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
    <div
      v-for="i in 6"
      :id="'section-' + i"
      :key="i"
      class="w-full h-screen snap-start"
    />
    <nav
      class="flex justify-center gap-14 fixed bottom-0 z-[0] w-full h-45 bg-(--s-background) pointer-events-none"
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
          class="absolute left-0 font-(family-name:--s-title-font) text-4xl text-primary-400 w-36 self-center pointer-events-auto dark:opacity-75"
          :style="{
            translate: `calc(${
              -50 * (1 - range(0, 1, sProgress))
            } * var(--spacing)) 0`,
            opacity: sDark
              ? 0.75 - range(0, 1, sProgress) * 0.75
              : 1 - range(0, 1, sProgress),
          }"
        >
          点击了解<br />星火软件
        </h2>
        <Icon
          name="s:about-indicator"
          class="absolute left-3 bottom-0 w-20 h-[auto]! s-color-primary-100 dark:s-color-primary-500 dark:opacity-50"
          mode="svg"
          :style="{
            translate: `calc(${40 * (sProgress - 1)} * var(--spacing)) 0`,
            opacity: sDark
              ? (range(0, 0.5, sProgress - 0.5) -
                  range(0, 0.5, sProgress - 6.5)) *
                0.38
              : (range(0, 0.5, sProgress - 0.5) -
                  range(0, 0.5, sProgress - 6.5)) *
                2,
          }"
        />
        <button
          class="relative p-5 rounded-full bg-white pointer-events-auto cursor-pointer dark:bg-primary-900 hover:bg-surface-50 hover:dark:bg-primary-800"
          @click="scrollIntoView('section-1')"
        >
          <Icon
            name="sp:spark"
            class="w-16 h-16 s-color-primary-color"
            mode="svg"
          />
          <div
            class="absolute p-5 w-full h-full rounded-full top-0 left-0 from-primary-400 to-primary-500 bg-linear-to-br dark:from-primary-500 dark:to-primary-600"
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
        </button>
        <button
          class="relative p-5 rounded-full bg-white pointer-events-auto cursor-pointer dark:bg-primary-900 hover:bg-surface-50 hover:dark:bg-primary-800"
          @click="scrollIntoView('section-2')"
        >
          <Icon
            name="s:gxde"
            class="w-16 h-16 s-deco-primary-color s-bg-primary-400 s-bg-dark"
            mode="svg"
          />
          <div
            class="absolute p-5 w-full h-full rounded-full top-0 left-0 from-primary-400 to-primary-500 bg-linear-to-br dark:from-primary-500 dark:to-primary-600"
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
        </button>
        <button
          class="relative p-5 rounded-full bg-white pointer-events-auto cursor-pointer dark:bg-primary-900 hover:bg-surface-50 hover:dark:bg-primary-800"
          @click="scrollIntoView('section-3')"
        >
          <Icon
            name="s:wine-runner"
            class="w-16 h-16 s-deco-primary-color s-bg-primary-400 s-bg-dark"
            mode="svg"
          />
          <div
            class="absolute p-5 w-full h-full rounded-full top-0 left-0 from-primary-400 to-primary-500 bg-linear-to-br dark:from-primary-500 dark:to-primary-600"
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
        </button>
        <button
          class="relative p-5 rounded-full bg-white pointer-events-auto cursor-pointer dark:bg-primary-900 hover:bg-surface-50 hover:dark:bg-primary-800"
          @click="scrollIntoView('section-4')"
        >
          <Icon
            name="s:amber-ce"
            class="w-16 h-16 s-deco-primary-color"
            mode="svg"
          />
          <div
            class="absolute p-5 w-full h-full rounded-full top-0 left-0 from-primary-400 to-primary-500 bg-linear-to-br dark:from-primary-500 dark:to-primary-600"
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
        </button>
        <button
          class="relative p-7 rounded-full bg-white pointer-events-auto cursor-pointer dark:bg-primary-900 hover:bg-surface-50 hover:dark:bg-primary-800"
          @click="scrollIntoView('section-5')"
        >
          <Icon
            name="s:package-manager"
            class="w-12 h-12 s-deco-primary-color s-bg-primary-400 s-bg-dark"
            mode="svg"
          />
          <div
            class="absolute p-7 w-full h-full rounded-full top-0 left-0 from-primary-400 to-primary-500 bg-linear-to-br dark:from-primary-500 dark:to-primary-600"
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
        </button>
        <button
          class="relative p-5 rounded-full bg-white pointer-events-auto cursor-pointer dark:bg-primary-900 hover:bg-surface-50 hover:dark:bg-primary-800"
          @click="scrollIntoView('section-6')"
        >
          <Icon
            name="s:fantascene"
            class="w-16 h-16 s-deco-primary-color s-bg-white dark:s-bg-primary-900"
            mode="svg"
          />
          <div
            class="absolute p-5 w-full h-full rounded-full top-0 left-0 from-primary-400 to-primary-500 bg-linear-to-br dark:from-primary-500 dark:to-primary-600"
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
        </button>
      </div>
    </nav>
    <div
      class="fixed bottom-0 z-[0] flex h-[calc(100vh-60*var(--spacing))] bg-primary-100 pointer-events-none bg-dark"
      :style="{
        transform: `translateY(${
          100 - range(0, 1, sProgress) * 100
        }%) translateX(${-100 * (range(1, 6, sProgress) - 1)}vw)`,
      }"
    >
      <section class="flex w-screen h-full items-center justify-center gap-16">
        <div class="relative w-128 h-96 bg-white rounded-3xl"></div>
        <div class="flex flex-col w-140 h-96 justify-between">
          <div class="flex items-end gap-6">
            <div
              class="w-40 h-40 rounded-4xl border-surface-100 border-3 drop-shadow-lg image spark"
            ></div>
            <div class="flex flex-col gap-4">
              <h3
                class="text-3xl font-bold text-primary-color pointer-events-auto"
              >
                Spark Store
              </h3>
              <h2 class="text-5xl font-bold pointer-events-auto">
                星火应用商店
              </h2>
            </div>
          </div>
          <div class="flex">
            <p
              class="text-left text-xl leading-[1.8] pointer-events-auto dark:text-surfacce-200"
            >
              星火应用商店是专为 Linux
              发行版打造的社区软件平台，提供安全便捷的应用投递、下载与安装服务，让获取
              Linux 应用变得更简单。
            </p>
          </div>

          <a
            href="https://gitee.com/spark-store-project/spark-store"
            class="px-8 py-2.5 text-2xl font-bold text-white self-end pointer-events-auto from-primary-400 to-primary-500 bg-linear-to-r rounded-full dark:from-primary-500 dark:to-primary-600"
          >
            <span class="font-(family-name:--s-title-font) opacity-60 mr-4"
              >MORE</span
            >
            了解更多
          </a>
        </div>
      </section>
      <section class="flex w-screen h-full items-center justify-center gap-16">
        <div class="relative w-128 h-96 bg-white rounded-3xl"></div>
        <div class="flex flex-col w-140 h-96 justify-between">
          <div class="flex items-end gap-6">
            <div class="w-40 h-40 rounded-4xl drop-shadow-lg image gxde"></div>
            <div class="flex flex-col gap-4">
              <h3
                class="text-3xl font-bold text-primary-color pointer-events-auto"
              >
                Classics Reborn
              </h3>
              <h2 class="text-5xl font-bold pointer-events-auto">GXDE</h2>
            </div>
          </div>
          <div class="flex">
            <p
              class="text-left text-xl leading-[1.8] pointer-events-auto dark:text-surfacce-200"
            >
              GXDE OS 是基于 Debian 的 Linux 发行版，是以经典 DDE 15
              桌面环境为核⼼，融合轻量化设计、开箱即用
              体验与本土化生态支持的操作系统。
            </p>
          </div>

          <a
            href="https://gitee.com/GXDE-OS"
            class="px-8 py-2.5 text-2xl font-bold text-white self-end pointer-events-auto from-primary-400 to-primary-500 bg-linear-to-r rounded-full dark:from-primary-500 dark:to-primary-600"
          >
            <span class="font-(family-name:--s-title-font) opacity-60 mr-4"
              >MORE</span
            >
            了解更多
          </a>
        </div>
      </section>
      <section class="flex w-screen h-full items-center justify-center gap-16">
        <div class="relative w-128 h-96 bg-white rounded-3xl"></div>
        <div class="flex flex-col w-140 h-96 justify-between">
          <div class="flex items-end gap-6">
            <div
              class="w-40 h-40 rounded-4xl drop-shadow-lg image wine-runner"
            ></div>
            <div class="flex flex-col gap-4">
              <h3
                class="text-3xl font-bold text-primary-color pointer-events-auto"
              >
                Wine Runner
              </h3>
              <h2 class="text-5xl font-bold pointer-events-auto">
                Wine 运行器
              </h2>
            </div>
          </div>
          <div class="flex">
            <p
              class="text-left text-xl leading-[1.8] pointer-events-auto dark:text-surfacce-200"
            >
              Wine 运行器是专为 Linux 用户设计的图形化工具， 通过集成 Wine
              环境、打包器和虚拟机功能，实现 Windows 应用程序的简化部署与运行。
            </p>
          </div>

          <a
            href="https://gitee.com/gfdgd-xi/deep-wine-runner"
            class="px-8 py-2.5 text-2xl font-bold text-white self-end pointer-events-auto from-primary-400 to-primary-500 bg-linear-to-r rounded-full dark:from-primary-500 dark:to-primary-600"
          >
            <span class="font-(family-name:--s-title-font) opacity-60 mr-4"
              >MORE</span
            >
            了解更多
          </a>
        </div>
      </section>
      <section class="flex w-screen h-full items-center justify-center gap-16">
        <div class="relative w-128 h-96 bg-white rounded-3xl"></div>
        <div class="flex flex-col w-140 h-96 justify-between">
          <div class="flex items-end gap-6">
            <div
              class="w-40 h-40 rounded-4xl border-surface-100 border-3 drop-shadow-lg image amber-ce"
            ></div>
            <div class="flex flex-col gap-4">
              <h3
                class="text-3xl font-bold text-primary-color pointer-events-auto"
              >
                Amber CE
              </h3>
              <h2 class="text-5xl font-bold pointer-events-auto">
                ACE 兼容环境
              </h2>
            </div>
          </div>
          <div class="flex">
            <p
              class="text-left text-xl leading-[1.8] pointer-events-auto dark:text-surfacce-200"
            >
              ACE 兼容环境是一款基于 Bubblewrap
              的容器化应用打包和分发方案，使任意平台的 Linux 发行版能无缝运行
              Debian 操作系统容器，提升软件兼容性。
            </p>
          </div>

          <a
            href="https://gitee.com/amber-ce/"
            class="px-8 py-2.5 text-2xl font-bold text-white self-end pointer-events-auto from-primary-400 to-primary-500 bg-linear-to-r rounded-full dark:from-primary-500 dark:to-primary-600"
          >
            <span class="font-(family-name:--s-title-font) opacity-60 mr-4"
              >MORE</span
            >
            了解更多
          </a>
        </div>
      </section>
      <section class="flex w-screen h-full items-center justify-center gap-16">
        <div class="relative w-128 h-96 bg-white rounded-3xl"></div>
        <div class="flex flex-col w-140 h-96 justify-between">
          <div class="flex items-end gap-6">
            <div
              class="w-40 h-40 rounded-4xl drop-shadow-lg image package-manager"
            ></div>
            <div class="flex flex-col gap-4">
              <h3
                class="text-3xl font-bold text-primary-color pointer-events-auto"
              >
                Package Manager
              </h3>
              <h2 class="text-5xl font-bold pointer-events-auto">应用管理器</h2>
            </div>
          </div>
          <div class="flex">
            <p
              class="text-left text-xl leading-[1.8] pointer-events-auto dark:text-surfacce-200"
            >
              星火应用管理器是星火社区生态中的本地化应用管理工具，支持启动应用、信息查看、一键卸载及提取安装包等核心功能。
            </p>
          </div>

          <a
            href="https://gitee.com/spark-store-project/ccc-app-manager"
            class="px-8 py-2.5 text-2xl font-bold text-white self-end pointer-events-auto from-primary-400 to-primary-500 bg-linear-to-r rounded-full dark:from-primary-500 dark:to-primary-600"
          >
            <span class="font-(family-name:--s-title-font) opacity-60 mr-4"
              >MORE</span
            >
            了解更多
          </a>
        </div>
      </section>
      <section class="flex w-screen h-full items-center justify-center gap-16">
        <div class="relative w-128 h-96 bg-white rounded-3xl"></div>
        <div class="flex flex-col w-140 h-96 justify-between">
          <div class="flex items-end gap-6">
            <div
              class="w-40 h-40 rounded-4xl drop-shadow-lg image fantascene"
            ></div>
            <div class="flex flex-col gap-4">
              <h3
                class="text-3xl font-bold text-primary-color pointer-events-auto"
              >
                Fantascene Wallpaper
              </h3>
              <h2 class="text-5xl font-bold pointer-events-auto">
                星火动态壁纸
              </h2>
            </div>
          </div>
          <div class="flex">
            <p
              class="text-left text-xl leading-[1.8] pointer-events-auto dark:text-surfacce-200"
            >
              星火动态壁纸是基于 X11 显式协议的高性能动态壁纸渲染引擎，专为
              Linux 平台深度优化，实现资源占用与视觉效果的极致平衡。
            </p>
          </div>

          <a
            href="https://gitee.com/liuminghang/fantascene-dynamic-wallpaper"
            class="px-8 py-2.5 text-2xl font-bold text-white self-end pointer-events-auto from-primary-400 to-primary-500 bg-linear-to-r rounded-full dark:from-primary-500 dark:to-primary-600"
          >
            <span class="font-(family-name:--s-title-font) opacity-60 mr-4"
              >MORE</span
            >
            了解更多
          </a>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped lang="scss">
.s-dark .bg-dark {
  background-color: rgb(from var(--p-primary-500) r g b / 0.1);
}
.s-dark .s-bg-dark {
  --s-bg: rgb(from var(--p-primary-500) r g b / 0.5);
}

.image {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.spark {
  background-image: url("~/assets/images/about/spark.png");
  background-image: url("~/assets/images/about/spark.webp");
  background-image: url("~/assets/images/about/spark.avif");
}

.gxde {
  background-size: contain;
  background-image: url("~/assets/images/about/gxde.png");
  background-image: url("~/assets/images/about/gxde.webp");
  background-image: url("~/assets/images/about/gxde.avif");
}

.wine-runner {
  background-image: url("~/assets/images/about/wine-runner.png");
  background-image: url("~/assets/images/about/wine-runner.webp");
  background-image: url("~/assets/images/about/wine-runner.avif");
}

.amber-ce {
  background-image: url("~/assets/images/about/amber-ce.png");
  background-image: url("~/assets/images/about/amber-ce.webp");
  background-image: url("~/assets/images/about/amber-ce.avif");
}

.package-manager {
  background-image: url("~/assets/images/about/package-manager.png");
  background-image: url("~/assets/images/about/package-manager.webp");
  background-image: url("~/assets/images/about/package-manager.avif");
}

.fantascene {
  background-image: url("~/assets/images/about/fantascene.png");
  background-image: url("~/assets/images/about/fantascene.webp");
  background-image: url("~/assets/images/about/fantascene.avif");
}
</style>

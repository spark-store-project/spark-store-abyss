<script setup lang="ts">
import type { Release } from "~/app.vue";

const appConfig = useAppConfig();

const scrollPanel = inject<Ref<ComponentPublicInstance>>("scrollPanel");
const sProgress = ref(0);

const appIcons = appConfig.appIcons;

onMounted(() => {
  watchEffect(() => {
    const scrollTop = (
      scrollPanel?.value as unknown as { lastScrollTop: number }
    ).lastScrollTop;
    const clientHeight = scrollPanel?.value?.$el.clientHeight;
    sProgress.value = scrollTop / clientHeight;
  });
});

const latestRelease = inject<Ref<Release>>("latestRelease");
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
          class="flex flex-col items-center justify-center mb-10 text-secondary-400 text-lg gap-2 tracking-[0.5em] transition-all duration-[.03s] dark:text-secondary-600"
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
          <h1 class="font-bold text-6xl dark:text-surface-50">星火应用商店</h1>
          <div class="flex flex-col items-start justify-between">
            <span
              class="font-(family-name:--s-title-font) px-4 py-0.5 text-white from-primary-400 to-primary-500 bg-linear-to-r rounded-full dark:from-primary-500 dark:to-primary-600"
              >V{{ latestRelease?.tag_name }}</span
            >
            <h2
              class="text-lg font-(family-name:--s-title-font) text-primary-500"
            >
              SPARK STORE
            </h2>
          </div>
        </div>
        <div class="flex -mt-3 gap-2">
          <img
            src="https://gitee.com/spark-store-project/spark-store/badge/star.svg?theme=gvp"
            height="21"
            class="h-[21px]"
          />
          <img
            src="https://gitee.com/spark-store-project/spark-store/badge/fork.svg?theme=gvp"
            height="21"
            class="h-[21px]"
          />
        </div>
        <div
          class="flex flex-col text-xl text-surface-500 gap-1 dark:text-surface-200"
        >
          <p>适用于 Debian 社区和其他 Linux 发行版的社区应用商店；</p>
          <p>从社区中来，到社区中去，聚星星之火，成燎原之势。</p>
          <p class="text-lg font-bold text-black dark:text-surface-100">
            {{ appConfig.latestNews.title }}
            <a :href="appConfig.latestNews.link" class="text-secondary-600"
              >了解更多 →</a
            >
          </p>
        </div>
        <div class="flex gap-4">
          <NuxtLink
            to="/download"
            class="px-12 py-2.5 text-2xl font-bold text-white from-primary-400 to-primary-500 bg-linear-to-r rounded-full dark:from-primary-500 dark:to-primary-600"
          >
            <i class="pi pi-download text-xl! font-bold! pr-4" /> 前往下载
          </NuxtLink>
          <a
            class="px-2.5 bg-primary-200 border-primary-400 border-4 rounded-full flex items-center justify-center dark:bg-primary-900 dark:border-secondary-600"
            href="https://gitee.com/spark-store-project"
          >
            <Icon
              name="simple-icons:gitee"
              class="text-2xl! font-bold! text-primary-color"
            />
          </a>
          <a
            class="px-2.5 bg-primary-200 border-primary-400 border-4 rounded-full flex items-center justify-center dark:bg-primary-900 dark:border-secondary-600"
            href="https://github.com/spark-store-project"
          >
            <i class="pi pi-github text-2xl! font-bold! text-primary-color" />
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
          class="absolute bottom-0 left-1/2 -translate-x-1/2 rounded-t-4xl px-6 pt-4 flex gap-6 from-primary-300 to-[transparent] bg-linear-to-b after:from-(transparent) after:from-50 after:to-(--s-to) after:bg-linear-to-b after:absolute after:top-0 after:left-0 after:w-full after:h-full after:z-2 dark:from-primary-800"
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
              class="text-3xl text-primary-500 font-(family-name:--s-title-font) tracking-widest dark:opacity-80"
            >
              SPARK
            </h2>

            <div
              v-for="i in 3"
              :key="i"
              class="w-full rounded-full p-3 from-primary-400 to-primary-200 bg-linear-to-b dark:from-primary-500 dark:to-primary-600 dark:opacity-60"
            ></div>
          </div>
          <div class="flex flex-col gap-4 w-full">
            <div class="flex gap-4 pl-2">
              <div
                v-for="i in 2"
                :key="i"
                class="p-3 rounded-full bg-primary-500 dark:opacity-80"
              ></div>

              <div
                class="w-40 p-3 rounded-full bg-primary-500 dark:opacity-80"
              ></div>

              <div class="grow-1"></div>

              <div
                v-for="i in 3"
                :key="i"
                class="p-3 rounded-full bg-primary-500 dark:opacity-80"
              ></div>
            </div>

            <div
              class="rounded-t-2xl p-4 flex gap-4 w-full from-primary-400 to-[transparent] bg-linear-to-b grow-1 dark:from-primary-700 dark:opacity-80"
            >
              <div
                v-for="i in 3"
                :key="i"
                class="w-45 h-27 rounded-xl flex items-center justify-center from-primary-500 to-primary-300 bg-linear-to-b dark:from-primary-600 dark:to-primary-700"
              >
                <i
                  class="pi text-5xl! text-primary-color dark:text-primary-200"
                  :class="`pi-${['th-large', 'cog', 'thumbs-up'][i - 1]}`"
                ></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h2
        class="text-center text-6xl font-bold text-primary-color dark:text-primary-400"
      >
        星星之火，可以燎原。
      </h2>
      <p class="text-center text-xl leading-[2] dark:text-surfacce-200">
        每个普通用户的需求反馈、每名开发者的代码贡献、每一次社区的互助分享，<br />
        都在为 Linux 桌面生态注入蓬勃活力。<br />
        我们深信「人人为我，我为人人」，以共享之火照亮开源之路。<br />
        您上传的应用可能成为他人工作的桥梁，他人分享的工具也可能为您带来方便。<br />
        我们珍视开源世界的共建基因，以微小而持久的善意融入这场共享长跑，<br />
        让技术普惠的星火在彼此照映中汇聚成光。
      </p>
      <div class="h-35"></div>
    </section>
    <section class="flex items-center justify-center gap-16 pt-15">
      <div
        class="flex bg-primary-200 rounded-4xl px-6 py-4 h-134 gap-6 overflow-hidden dark:bg-primary-900"
      >
        <div
          v-for="i in 5"
          :key="i"
          class="flex flex-col gap-6"
          :class="i % 2 === 0 ? '-mt-55' : '-mt-66'"
          :style="{
            transform: `translateY(calc(${
              (getCubicBezier(
                0,
                1.0 - 0.2 * (5 - i),
                1,
                0.2 * (5 - i)
              )((range(-1, 1, sProgress - 2) + 1) * 0.5) -
                0.5) *
              66 *
              (i % 2 === 0 ? 1 : -1)
            } * var(--spacing)))`,
            transition: `transform 0.01s ease-in-out`,
          }"
        >
          <div
            v-for="j in 12"
            :key="j"
            class="w-16 h-16 bg-white rounded-2xl shrink-0 app-icon bg-contain"
            :style="{
              '--s-avif': `url('/app-icons/${
                appIcons[((i - 1) * 9 + j - 1) % appIcons.length]
              }.avif')`,
              '--s-webp': `url('/app-icons/${
                appIcons[((i - 1) * 9 + j - 1) % appIcons.length]
              }.webp')`,
              '--s-png': `url('/app-icons/${
                appIcons[((i - 1) * 9 + j - 1) % appIcons.length]
              }.png')`,
            }"
          ></div>
        </div>
      </div>
      <div class="flex flex-col gap-3">
        <div class="flex items-center gap-6">
          <Icon
            name="sp:spark"
            class="text-6xl s-color-primary-500"
            mode="svg"
          />
          <h2
            class="text-4xl font-(family-name:--s-title-font) text-primary-500"
          >
            WHAT'S NEW ?
          </h2>
        </div>
        <p class="text-5xl leading-[1.5]">
          不想错过 Linux<br />
          日新月异的软件生态？
        </p>
        <p class="text-5xl leading-[1.5] font-bold">
          或许现在，<br />
          你只需要一个<br />
          <span class="text-primary-color">星火应用商店。</span>
        </p>
      </div>
    </section>
    <section class="flex flex-col items-center justify-center gap-10 pt-15">
      <div class="flex items-center justify-center gap-6">
        <Icon
          name="s:community"
          mode="svg"
          class="s-deco-secondary-700 s-bg-secondary-100 s-bg-2-secondary-200 s-bg-3-secondary-400 dark:s-deco-primary-400 dark:s-bg-primary-800 dark:s-bg-2-secondary-600 dark:s-bg-3-primary-900"
          :style="{
            height: '100%',
            width: 'auto',
          }"
        />
        <h2
          class="text-5xl text-primary-color font-bold leading-[1.3] dark:text-primary-400"
        >
          <span
            class="font-(family-name:--s-title-font) text-primary-400 font-normal dark:opacity-50"
            >COMMUNITY</span
          ><br />
          社区共筑&nbsp;&nbsp;精挑细选
        </h2>
      </div>
      <div class="flex gap-16">
        <!-- 左侧内容区域 -->
        <div class="flex flex-col py-12 gap-6">
          <div class="flex flex-col">
            <p class="text-5xl leading-[1.5]">凝聚开发者智慧</p>
            <p class="text-5xl font-bold leading-[1.5]">
              以开源精神守护应用品质
            </p>
          </div>
          <p
            class="text-lg text-surface-700 leading-[2] max-w-[31.8em] dark:text-surface-200"
          >
            星火社区构建 Linux
            生态「应用银河」，持续上架丰富的跨平台、跨生态应用程序，涵盖系统工具、影音娱乐等精选资源，精准匹配用户需求。年轻开发团队以
            00 后为主力，致力让技术成果如星火般点亮数字原野。
          </p>
          <div class="flex items-center gap-4 dark:opacity-80">
            <p class="font-bold text-3xl text-primary-500">
              全架构<br />
              上架应用
            </p>
            <p
              class="text-7xl font-(family-name:--s-title-font) text-primary-500"
            >
              {{
                Math.floor(
                  2200 *
                    ((getCubicBezier(
                      0,
                      1,
                      1,
                      0
                    )(range(-0.25, 0.25, sProgress - 3) * 2 + 0.5) -
                      0.5) *
                      2 +
                      1)
                )
              }}<span
                class="inline-block"
                :style="{
                  opacity:
                    1 -
                    Math.abs(
                      riro(range(-0.05, 0.05, sProgress - 3) * 10 + 0.5) - 0.5
                    ) *
                      2,
                  transform: `scale(${
                    1 +
                    Math.abs(range(-0.05, 0.05, sProgress - 3) * 10 + 0.5 - 0.5)
                  })`,
                }"
                >+</span
              >
            </p>
          </div>
        </div>

        <!-- 右侧图片区域 -->
        <Icon
          name="s:community-deco"
          class="s-deco-secondary-900 s-bg-primary-200 dark:s-deco-secondary-100 dark:s-bg-primary-500"
          mode="svg"
          :style="{
            height: '100%',
            width: 'auto',
          }"
        />
      </div>
    </section>
    <section class="flex flex-col items-center justify-center gap-10 pt-15">
      <div class="flex items-center justify-center gap-6">
        <Icon
          name="s:superspeed"
          class="s-deco-secondary-700 s-bg-secondary-100 s-bg-2-secondary-200 s-bg-3-secondary-400 dark:s-deco-primary-400 dark:s-bg-primary-800 dark:s-bg-2-secondary-600 dark:s-bg-3-primary-900"
          mode="svg"
          :style="{
            height: '100%',
            width: 'auto',
          }"
        />
        <h2
          class="text-5xl text-primary-color font-bold leading-[1.3] dark:text-primary-400"
        >
          <span
            class="font-(family-name:--s-title-font) text-primary-400 font-normal dark:opacity-50"
            >SUPERSPEED</span
          ><br />
          极速下载&nbsp;&nbsp;瞬息可达
        </h2>
      </div>
      <div class="flex gap-16">
        <!-- 左侧图片区域 -->
        <Icon
          name="s:superspeed-deco"
          class="s-deco-secondary-900 s-bg-primary-200 dark:s-deco-secondary-100 dark:s-bg-primary-500"
          mode="svg"
          :style="{
            height: '100%',
            width: 'auto',
          }"
        />

        <!-- 右侧内容区域 -->
        <div class="flex flex-col py-12 gap-6">
          <div class="flex flex-col">
            <p class="text-5xl leading-[1.5]">下载「黑科技」</p>
            <p class="text-5xl font-bold leading-[1.5]">APTSS 重构智能网络</p>
          </div>
          <p
            class="text-lg text-surface-700 leading-[2] max-w-[31em] dark:text-surface-200"
          >
            下载速度是应用商店的关键指标，而星火应用商店在这方面表现卓越。在软件分发阶段，商店采用基于
            APT-Fast 优化的下载工具 APTSS，准备速度较原版提升 300%
            以上，处理复杂应用依赖关系亦流畅迅捷；同时支持多线程下载加速，充分利用网络带宽资源，告别卡顿等待。
          </p>
          <a
            href="https://gitee.com/GXDE-OS/aptss"
            class="text-xl font-bold text-secondary-600 dark:text-secondary-500"
            >🎯 APTSS 源码仓库地址 →</a
          >
        </div>
      </div>
    </section>
    <section class="flex flex-col items-center justify-center gap-10 pt-15">
      <div class="flex items-center justify-center gap-6">
        <Icon
          name="s:convenience"
          class="s-deco-secondary-700 s-bg-secondary-100 s-bg-2-secondary-200 s-bg-3-secondary-400 dark:s-deco-primary-400 dark:s-bg-primary-800 dark:s-bg-2-secondary-600 dark:s-bg-3-primary-900"
          mode="svg"
          :style="{
            height: '100%',
            width: 'auto',
          }"
        />
        <h2
          class="text-5xl text-primary-color font-bold leading-[1.3] dark:text-primary-400"
        >
          <span
            class="font-(family-name:--s-title-font) text-primary-400 font-normal dark:opacity-50"
            >CONVENIENCE</span
          ><br />一键安装&nbsp;&nbsp;即刻掌控
        </h2>
      </div>
      <div class="flex gap-16">
        <!--左侧内容区域 -->
        <div class="flex flex-col py-12 gap-6">
          <div class="flex flex-col">
            <p class="text-5xl leading-[1.5]">一站式安装体验</p>
            <p class="text-5xl font-bold leading-[1.5]">
              让技术普惠真正触手可及
            </p>
          </div>
          <p
            class="text-lg text-surface-700 leading-[2] max-w-[31em] dark:text-surface-200"
          >
            星火商店所有程序经过深度适配优化；用户轻点按钮，系统自动完成依赖解析与环境配置，处理复杂软件如搭积木般严丝合缝。从图形应用到编程工具，从
            Wine 移植应用到 Android
            APP，皆可轻松实现「零门槛安装」。上架应用均通过严格测试，社区开发者持续维护更新，确保每款软件始终良好稳定运行。
          </p>
        </div>
        <!-- 右侧图片区域 -->
        <Icon
          name="s:convenience-deco"
          class="s-deco-secondary-900 s-bg-primary-200 dark:s-deco-secondary-100 dark:s-bg-primary-500"
          mode="svg"
          :style="{
            height: '100%',
            width: 'auto',
          }"
        />
      </div>
    </section>
    <section class="flex items-center justify-center gap-6 pt-15">
      <div
        class="fixed top-0 left-0 w-full h-full z-[-1]"
        :style="{
          opacity: 0.1 - Math.abs(range(-0.5, 0.5, sProgress - 6)) * 0.2,
          transform: `scale(${1 - range(-0.5, 0.5, sProgress - 6)}) rotate(${
            range(-0.5, 0.5, sProgress - 6) * 180
          }deg)`,
        }"
      >
        <Icon
          name="sp:spark"
          class="absolute top-1/2 -translate-y-1/2 s-color-primary-500"
          mode="svg"
          :style="{
            height: 'auto',
            width: '100%',
          }"
        />
      </div>
      <!-- 左侧内容区域 -->
      <div class="flex flex-col gap-4 items-start">
        <div class="flex items-center gap-4">
          <p class="font-bold text-3xl text-primary-color">星火应用商店</p>
          <p
            class="font-bold text-2xl text-secondary-300 font-(family-name:--s-title-font) dark:text-secondary-600"
          >
            SPARK STORE
          </p>
        </div>
        <p class="text-5xl leading-[1.5]">
          更多精彩，<br />
          <span class="font-bold">邀您下载体验。</span>
        </p>
        <p class="text-lg leading-[2] text-surface-900 dark:text-surface-200">
          Linux 软件生态的构建并非依赖个体的孤立努力，而需要全社区共同参与；<br />
          只有当大家的「星火」聚集一处，方可引发「燎原之势」。
        </p>
        <NuxtLink
          to="/download"
          class="px-14 py-3 text-2xl font-bold text-white from-primary-400 to-primary-500 bg-linear-to-r rounded-full dark:from-primary-500 dark:to-primary-600"
        >
          <i class="pi pi-download text-xl! font-bold! pr-4" /> 前往下载
        </NuxtLink>
      </div>
      <!-- 右侧图片区域 -->
      <div class="flex items-center">
        <i class="w-96 h-144 figure-container" />
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

.s-dark .s-dots {
  background-image: linear-gradient(135deg, #d05a63, #d4a641);
}

.figure-container {
  background-image: url("~/assets/images/index/figure.png");
  background-image: url("~/assets/images/index/figure.webp");
  background-image: url("~/assets/images/index/figure.avif");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}

.s-dark .figure-container {
  background-image: url("~/assets/images/index/figure-dark.png");
  background-image: url("~/assets/images/index/figure-dark.webp");
  background-image: url("~/assets/images/index/figure-dark.avif");
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

.s-dark .card {
  &::before {
    background-image: linear-gradient(
      135deg,
      color-mix(in srgb, var(--p-primary-400) 60%, var(--s-background) 40%),
      transparent 42%
    );
  }

  &::after {
    background-image: linear-gradient(
      135deg,
      color-mix(in srgb, var(--p-primary-500) 30%, var(--s-background) 70%),
      var(--s-background) 42%,
      var(--s-background) 50%,
      transparent
    );
  }
}
.s2d {
  &::before {
    content: "";
    width: calc(64 * var(--spacing));
    height: calc(128 * var(--spacing));
    background-image: url("~/assets/images/index/s2d.png");
    background-image: url("~/assets/images/index/s2d.webp");
    background-image: url("~/assets/images/index/s2d.avif");
    background-size: contain;
    background-position: center;
  }
  &::after {
    content: "";
    width: calc(64 * var(--spacing));
    height: calc(128 * var(--spacing));
    background-image: url("~/assets/images/index/s2d.png");
    background-image: url("~/assets/images/index/s2d.webp");
    background-image: url("~/assets/images/index/s2d.avif");
    background-size: contain;
    background-position: center;
    transform: rotate(180deg);
  }
}

.app-icon {
  background-image: var(--s-png);
  background-image: var(--s-webp);
  background-image: var(--s-avif);
}
</style>

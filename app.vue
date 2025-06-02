<script setup lang="ts">
import ScrollPanel from "primevue/scrollpanel";
import Button from "primevue/button";

const path = computed(() => {
  return useRoute().path;
});
const sProgress = ref(["/", "/download"].includes(path.value) ? 1 : 0);
const scrollPanel = useTemplateRef<ComponentPublicInstance>("scrollPanel");
const sX = ref(0);
const sY = ref(0);
const sWidth = ref(0);
const sHeight = ref(0);
const mounted = ref(false);

provide("scrollPanel", scrollPanel);

const handleScrollOrResize = () => {
  const navEl = document.querySelector("header nav");
  const el = document.querySelector("header .active");
  if (el && navEl) {
    sX.value = el.getBoundingClientRect().x - navEl.getBoundingClientRect().x;
    sY.value = el.getBoundingClientRect().y - navEl.getBoundingClientRect().y;
    sWidth.value = el.getBoundingClientRect().width;
    sHeight.value = el.getBoundingClientRect().height;
  }
  if (!["/", "/download"].includes(path.value)) {
    sProgress.value = 0;
    return;
  }
  const scrollTop = (scrollPanel.value as unknown as { lastScrollTop: number })
    .lastScrollTop;
  const clientHeight = scrollPanel.value?.$el.clientHeight;
  if (path.value === "/") {
    sProgress.value =
      1 -
      range(0, 1, scrollTop / clientHeight) +
      1 -
      Math.abs(range(-1, 1, scrollTop / clientHeight - 6));
    return;
  }
  sProgress.value = 1 - range(0, 1, scrollTop / clientHeight);
};

onMounted(() => {
  addEventListener("resize", handleScrollOrResize);
  watchEffect(handleScrollOrResize);
  nextTick(() => {
    mounted.value = true;
  });
});

const qrWidth = ref(0);

onMounted(() => {
  const qrEl = document.querySelector("footer .flex:nth-child(3) svg");
  if (qrEl) {
    qrEl.addEventListener("resize", () => {
      qrWidth.value = qrEl.getBoundingClientRect().height;
    });
    qrWidth.value = qrEl.getBoundingClientRect().height;
  }
});
</script>

<template>
  <ScrollPanel
    ref="scrollPanel"
    style="width: 100vw; height: 100vh"
    :pt="{
      content: {
        class: 'snap-y snap-mandatory scroll-smooth overflow-x-hidden!',
      },
    }"
  >
    <header
      class="fixed w-full z-10 px-12"
      :style="{ '--s-progress': sProgress }"
    >
      <nav
        class="relative flex px-8 py-2 items-center"
        :class="{ mounted }"
        :style="{
          '--s-x': sX,
          '--s-y': sY,
          '--s-width': sWidth,
          '--s-height': sHeight,
        }"
      >
        <NuxtLink to="/" class="flex items-center">
          <Icon
            name="s:spark"
            class="text-4xl mr-2"
            mode="svg"
            :style="{
              '--s-c1': 'var(--p-primary-color)',
              '--s-c2': 'var(--p-primary-color)',
              '--s-c3': 'var(--p-primary-color)',
              '--s-c4': 'var(--p-primary-color)',
              '--s-c5': 'var(--p-primary-color)',
              '--s-c6': 'var(--p-primary-color)',
              '--s-c7': 'var(--p-primary-color)',
            }"
          />
          <h1 class="font-(family-name:--s-title-font)">SPARK</h1>
        </NuxtLink>
        <div class="grow" />
        <NuxtLink to="/" class="nav-link" active-class="active">
          首页
        </NuxtLink>
        <NuxtLink to="/download" class="nav-link" active-class="active">
          下载
        </NuxtLink>
        <NuxtLink to="/news" class="nav-link" active-class="active">
          新闻
        </NuxtLink>
        <NuxtLink to="/faq" class="nav-link" active-class="active">
          帮助
        </NuxtLink>
        <NuxtLink to="/about" class="nav-link" active-class="active">
          关于
        </NuxtLink>
        <NuxtLink to="/gxde" class="nav-link" active-class="active">
          GXDE OS
        </NuxtLink>
        <Button
          icon="pi pi-sun"
          aria-label="Toggle Dark Mode"
          size="small"
          class="shrink-0"
          rounded
          severity="secondary"
        />
      </nav>
    </header>
    <div>
      <NuxtPage />
    </div>
    <footer
      class="w-full flex justify-around bg-white snap-start overflow-hidden p-14"
    >
      <div class="flex flex-col items-start gap-6">
        <Icon
          name="s:spark"
          class="grow"
          mode="svg"
          :style="{
            width: 'auto',
            height: 'auto',
          }"
        />
        <h2
          class="font-(family-name:--s-title-font) text-5xl text-(--p-surface-500)"
        >
          SPARK
        </h2>
      </div>
      <div class="flex flex-col gap-4">
        <h2 class="text-2xl font-bold">关于星火社区</h2>
        <p class="leading-[2] text-(--p-surface-600) max-w-[25.8em]">
          星火社区是以丰富 Linux
          应用生态为核心目标的开源协作平台，汇聚年轻开发者团队。核心项目星火应用商店通过整合分散资源、提供海量软件下载及安装功能，解决
          Linux 用户获取应用难题。社区以「星火燎原」为理念，通过论坛、Wiki
          和形象 IP 等传播方式构建开放协作生态。
        </p>
      </div>
      <div class="flex flex-col items-end gap-8">
        <div class="flex grow items-end gap-6">
          <h2 class="whitespace-nowrap text-right text-2xl font-bold">
            加入星火应用商店<br />
            用户交流群
          </h2>
          <Icon
            name="s:qrcode-3"
            mode="svg"
            :style="{
              width: qrWidth + 'px',
              height: '100%',
              '--s-color': '#000000',
            }"
          />
        </div>
        <p class="text-2xl">© 2020-{{ new Date().getFullYear() }} 星火社区</p>
      </div>
    </footer>
  </ScrollPanel>
</template>

<style scoped lang="scss">
header {
  transform: translateY(calc(var(--s-progress) * 12 * var(--spacing)));
  transition: {
    property: transform;
    duration: 0.1s;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    transform: translateX(calc(var(--s-progress) * 12 * var(--spacing)));
    width: calc(100% - var(--s-progress) * 24 * var(--spacing));
    border-radius: calc(var(--s-progress) * 4 * var(--spacing));
    height: 100%;
    background-color: #fff;
    z-index: -1;
    transition: {
      property: transform, width, border-radius;
      duration: 0.1s;
    }
  }

  h1 {
    font-size: 1.75em;
    color: var(--p-surface-500);
  }

  nav::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(calc(var(--s-x) * 1px), calc(var(--s-y) * 1px));
    width: calc(var(--s-width) * 1px);
    height: calc(var(--s-height) * 1px);
    background-color: var(--p-primary-200);
    border-radius: calc(var(--spacing) * 4.75);
    z-index: -1;
  }

  .nav-link {
    margin-right: calc(var(--spacing) * 2);
    padding: calc(var(--spacing) * 2) calc(var(--spacing) * 4);
    border-radius: calc(var(--spacing) * 4.75);
    font-weight: bold;
    color: var(--p-surface-600);

    &.active {
      color: var(--p-primary-600);
      background-color: var(--p-primary-200);
    }
  }

  nav.mounted {
    &::before {
      transition: {
        property: width, transform;
        duration: 0.3s;
      }
    }

    .nav-link {
      background-color: unset;

      &:hover {
        background-color: rgba(from var(--p-surface-400) r g b / 0.1);
      }
    }
  }
}
</style>

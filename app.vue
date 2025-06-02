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
  sProgress.value = 1 - Math.min(scrollTop / clientHeight, 1);
};

onMounted(() => {
  addEventListener("resize", handleScrollOrResize);
  watchEffect(handleScrollOrResize);
  nextTick(() => {
    mounted.value = true;
  });
});
</script>

<template>
  <ScrollPanel
    ref="scrollPanel"
    style="width: 100vw; height: 100vh"
    :pt="{
      content: {
        class: 'snap-y snap-mandatory scroll-smooth',
        style: {
          scrollDuration: '2s',
        },
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
            class="text-4xl mr-2 fill-(--p-primary-color)"
            mode="svg"
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
    <footer></footer>
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

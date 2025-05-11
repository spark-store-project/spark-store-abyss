<script setup lang="ts"></script>

<template>
  <header>
    <nav>
      <NuxtLink to="/">
        <img />
        <h1>SPARK</h1>
      </NuxtLink>
      <ul>
        <li><NuxtLink to="/">首页</NuxtLink></li>
        <li><NuxtLink to="/download">下载</NuxtLink></li>
        <li><NuxtLink to="/news">新闻</NuxtLink></li>
        <li><NuxtLink to="/faq">帮助</NuxtLink></li>
        <li><NuxtLink to="/about">关于</NuxtLink></li>
        <li><NuxtLink to="/gxde">GXDE OS</NuxtLink></li>
      </ul>
      <Button icon="pi pi-sun" aria-label="Save" />
    </nav>
  </header>
  <div>
    <NuxtPage />
  </div>
  <footer></footer>
</template>

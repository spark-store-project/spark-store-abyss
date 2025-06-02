# Spark Store Abyss

[![GitHub License](https://img.shields.io/github/license/jiwangyihao/spark-store-abyss)](https://github.com/jiwangyihao/spark-store-abyss/blob/main/LICENSE)
[![wakatime](https://wakatime.com/badge/user/7ef6dafe-00d7-45e3-b4c7-27b1f5d4d735/project/fa95e054-a4d8-48af-8857-22773d075230.svg)](https://wakatime.com/badge/user/7ef6dafe-00d7-45e3-b4c7-27b1f5d4d735/project/fa95e054-a4d8-48af-8857-22773d075230)
[![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/jiwangyihao/spark-store-abyss/.github%2Fworkflows%2Fnuxtjs.yml)](https://github.com/jiwangyihao/spark-store-abyss/actions)
[![GitHub commit activity](https://img.shields.io/github/commit-activity/w/jiwangyihao/spark-store-abyss)](https://github.com/jiwangyihao/spark-store-abyss/commits)

代号 Abyss，全新重生的星火应用商店官网，基于 Nuxt 3 + Vue 3 + Vite + TailwindCSS 4 构建，采用全新设计语言，提供更快的加载速度和更好的用户体验。

支持 SSR/SSG。

## Setup

### Install Node.js

Using tools like [nvm](https://nvm.sh) or [fnm](https://github.com/Schniz/fnm) is recommended to manage Node.js versions. Also, the latest LTS version is recommended.

You can check your current Node.js version with:

```bash
node -v
```

### Install Corepack

Corepack is a tool that helps manage package managers like npm, pnpm, yarn, and bun. It is included with Node.js versions 16.9.0 and later.

To enable Corepack, run the following command:

```bash
corepack enable
```

### Install Dependencies

Make sure to install dependencies:

```bash
pnpm install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
pnpm dev
```

## Production

Build the application for production (SSR mode):

```bash
pnpm build
```

Locally preview production build (SSR mode):

```bash
pnpm preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

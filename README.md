# Spark Store Abyss

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

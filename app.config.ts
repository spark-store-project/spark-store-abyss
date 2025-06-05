export default defineAppConfig({
  latestNews: {
    title: "🎉社区吉祥物「星小火」",
    link: "https://tai3.cn",
  },
  // 不设置 latestRelease 时，默认为构建时从 Gitee 获取的最新版本信息
  // latestRelease: {
  //     tag_name: "1.0.0",
  //     created_at: "2024-11-01T00:00:00Z",
  //     body: "Initial release of Spark Store.",
  //     assets: [
  //         {
  //             name: "spark-store-1.0.0-amd64.deb",
  //             browser_download_url: "https://example.com/spark-store-1.0.0-amd64.deb",
  //         }
  //     ],
  // },
});

import { defineUserConfig } from "vuepress";
import theme from "./theme.js";



export default defineUserConfig({
  base: "/paperbasket/",

  locales: {
    // "/en/": {
    //   lang: "en-US",
    //   title: "Blog Demo",
    //   description: "A blog demo for vuepress-theme-hope",
    // },
    "/": {
      lang: "zh-CN",
      title: "边缘纸篓",
      description: "自建垃圾场",
    },
  },

  theme,

  shouldPrefetch: false,
});

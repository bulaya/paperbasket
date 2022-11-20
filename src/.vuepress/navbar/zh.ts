import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  {
    text: "大数据",
    prefix: "/bigdata/",
    children: [
        {
            text: "flink",
            prefix: "flink/",
            link: 'flink/安装',

        },
        
    ]
  },
//   {
//     text: "V2 文档",
//     icon: "note",
//     link: "https://vuepress-theme-hope.github.io/v2/zh/",
//   },
]);

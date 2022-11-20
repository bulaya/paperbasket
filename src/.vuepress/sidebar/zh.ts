import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    "",
    {
      text: "大数据",
      prefix: "bigdata/",
      children: [
        {
            text: "flink",
            prefix: "flink/",
            children: "structure",
        }
      ]
      
    },
  ],
});

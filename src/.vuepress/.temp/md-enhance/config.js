import { defineClientConfig } from "@vuepress/client";
import ChartJS from "C:/Users/14718/VueProjects/paperbasket/node_modules/.pnpm/registry.npmmirror.com+vuepress-plugin-md-enhance@2.0.0-beta.124/node_modules/vuepress-plugin-md-enhance/lib/client/components/ChartJS.js";
import CodeTabs from "C:/Users/14718/VueProjects/paperbasket/node_modules/.pnpm/registry.npmmirror.com+vuepress-plugin-md-enhance@2.0.0-beta.124/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeTabs.js";
import "C:/Users/14718/VueProjects/paperbasket/node_modules/.pnpm/registry.npmmirror.com+vuepress-plugin-md-enhance@2.0.0-beta.124/node_modules/vuepress-plugin-md-enhance/lib/client/styles/container/index.scss";
import CodeDemo from "C:/Users/14718/VueProjects/paperbasket/node_modules/.pnpm/registry.npmmirror.com+vuepress-plugin-md-enhance@2.0.0-beta.124/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeDemo.js";
import ECharts from "C:/Users/14718/VueProjects/paperbasket/node_modules/.pnpm/registry.npmmirror.com+vuepress-plugin-md-enhance@2.0.0-beta.124/node_modules/vuepress-plugin-md-enhance/lib/client/components/ECharts.js";
import FlowChart from "C:/Users/14718/VueProjects/paperbasket/node_modules/.pnpm/registry.npmmirror.com+vuepress-plugin-md-enhance@2.0.0-beta.124/node_modules/vuepress-plugin-md-enhance/lib/client/components/FlowChart.js";
import "C:/Users/14718/VueProjects/paperbasket/node_modules/.pnpm/registry.npmmirror.com+vuepress-plugin-md-enhance@2.0.0-beta.124/node_modules/vuepress-plugin-md-enhance/lib/client/styles/footnote.scss";
import "C:/Users/14718/VueProjects/paperbasket/node_modules/.pnpm/registry.npmmirror.com+vuepress-plugin-md-enhance@2.0.0-beta.124/node_modules/vuepress-plugin-md-enhance/lib/client/styles/image-mark.scss";
import "C:/Users/14718/VueProjects/paperbasket/node_modules/.pnpm/registry.npmmirror.com+vuepress-plugin-md-enhance@2.0.0-beta.124/node_modules/vuepress-plugin-md-enhance/lib/client/styles/image-title.scss";
import Mermaid from "C:/Users/14718/VueProjects/paperbasket/node_modules/.pnpm/registry.npmmirror.com+vuepress-plugin-md-enhance@2.0.0-beta.124/node_modules/vuepress-plugin-md-enhance/lib/client/components/Mermaid.js";
import Presentation from "C:/Users/14718/VueProjects/paperbasket/node_modules/.pnpm/registry.npmmirror.com+vuepress-plugin-md-enhance@2.0.0-beta.124/node_modules/vuepress-plugin-md-enhance/lib/client/components/Presentation.js";
import Playground from "C:/Users/14718/VueProjects/paperbasket/node_modules/.pnpm/registry.npmmirror.com+vuepress-plugin-md-enhance@2.0.0-beta.124/node_modules/vuepress-plugin-md-enhance/lib/client/components/Playground.js";
import Tabs from "C:/Users/14718/VueProjects/paperbasket/node_modules/.pnpm/registry.npmmirror.com+vuepress-plugin-md-enhance@2.0.0-beta.124/node_modules/vuepress-plugin-md-enhance/lib/client/components/Tabs.js";
import "C:/Users/14718/VueProjects/paperbasket/node_modules/.pnpm/registry.npmmirror.com+vuepress-plugin-md-enhance@2.0.0-beta.124/node_modules/vuepress-plugin-md-enhance/lib/client/styles/tasklist.scss";
import "C:/Users/14718/VueProjects/paperbasket/node_modules/.pnpm/registry.npmmirror.com+vuepress-plugin-md-enhance@2.0.0-beta.124/node_modules/vuepress-plugin-md-enhance/lib/client/styles/katex.scss";
import { defineAsyncComponent } from "vue";


export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("ChartJS", ChartJS);
    app.component("CodeTabs", CodeTabs);
    app.component("CodeDemo", CodeDemo);
    app.component("ECharts", ECharts);
    app.component("FlowChart", FlowChart);
    app.component("Mermaid", Mermaid);
    app.component("Presentation", Presentation);
    app.component("Playground", Playground);
    app.component("Tabs", Tabs);
    app.component("VuePlayground", defineAsyncComponent(() => import("C:/Users/14718/VueProjects/paperbasket/node_modules/.pnpm/registry.npmmirror.com+vuepress-plugin-md-enhance@2.0.0-beta.124/node_modules/vuepress-plugin-md-enhance/lib/client/components/VuePlayground.js")));
        
  },
});

export const categoryMap = {"category":{"/":{"path":"/category/","map":{"大数据":{"path":"/category/%E5%A4%A7%E6%95%B0%E6%8D%AE/","keys":["v-0db8ce7b"]},"flink":{"path":"/category/flink/","keys":["v-0db8ce7b"]}}}},"tag":{"/":{"path":"/tag/","map":{"flink":{"path":"/tag/flink/","keys":["v-0db8ce7b"]}}}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogCategory)
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ categoryMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap);
  });



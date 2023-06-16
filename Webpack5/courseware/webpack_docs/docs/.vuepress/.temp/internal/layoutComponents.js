import { defineAsyncComponent } from 'vue'

export const layoutComponents = {
  "404": defineAsyncComponent(() => import("F:/Program/Front-end-learning/Study/Webpack5/courseware/webpack_docs/node_modules/@vuepress/theme-default/lib/client/layouts/404.vue")),
  "Layout": defineAsyncComponent(() => import("F:/Program/Front-end-learning/Study/Webpack5/courseware/webpack_docs/node_modules/@vuepress/theme-default/lib/client/layouts/Layout.vue")),
}

import ElementPlus from "element-plus";
import { createApp, ref, defineAsyncComponent } from "vue";
import LayoutSidebar from "./layout/sidebar.js";
import LayoutUserMenu from "./layout/user-menu.js";
import LayoutMenus from "./layout/menus.js";
import route from "./route.js";

const app = createApp({
  components: {
    LayoutSidebar,
    LayoutUserMenu,
    LayoutMenus
  },
  setup() {
    const isCollapse = ref(false)

    return {
      isCollapse
    }
  },
});

app.use(route);
app.use(ElementPlus);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
app.mount("#app");

import ElementPlus from "element-plus";
import { createApp, ref } from "vue";
import LayoutSidebar from "./layout/sidebar.js";
import LayoutUserMenu from "./layout/user-menu.js";
import LayoutMenus from "./layout/menus.js";

const page = {
  components: {
    LayoutSidebar,
    LayoutUserMenu,
    LayoutMenus
  },
  data() {
    return {
      isCollapse: ref(false),
    };
  },
  methods: {
    async logout() {
      await this.$store.dispatch("user/logout");
      this.$router.push(`/login?redirect=${this.$route.fullPath}`);
    },
  },
};

const app = createApp(page);
app.use(ElementPlus);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
app.mount("#app");

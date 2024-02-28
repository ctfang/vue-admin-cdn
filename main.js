import ElementPlus from "element-plus";
import { createApp, ref } from "vue";

console.log(ref);

const page = {
  data() {
    return {
      isCollapse: ref(false),
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    toggleSideBar() {
      if (this.isCollapse) {
        document.documentElement.style.setProperty("--sidebar-width", "210px");
        this.isCollapse = ref(false);
      } else {
        document.documentElement.style.setProperty("--sidebar-width", "63px");
        this.isCollapse = ref(true);
      }
      console.log(this.isCollapse);
    },
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

export default {
    setup() {
        return {};
    },
    methods: {
        async logout() {
            await this.$store.dispatch("user/logout");
            this.$router.push(`/login?redirect=${this.$route.fullPath}`);
        },
    },
    template: `
<el-dropdown class="avatar-container" trigger="click">
            <div class="avatar-wrapper">
              <img :src="'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80'"
                class="user-avatar">
              <el-icon class="el-icon--right"><caret-bottom /></el-icon>
            </div>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>Action 1</el-dropdown-item>
                <el-dropdown-item>Action 2</el-dropdown-item>
                <el-dropdown-item>Action 3</el-dropdown-item>
                <el-dropdown-item disabled>Action 4</el-dropdown-item>
                <el-dropdown-item divided>Action 5</el-dropdown-item>
                <el-dropdown-item divided>Action 6</el-dropdown-item>
              </el-dropdown-menu>
            </template>
</el-dropdown>`,
}

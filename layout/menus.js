export default {
    props: ['isCollapse'],
    setup(props) {
        const handleOpen = (key, keyPath) => {

        }
        const handleClose = (key, keyPath) => {

        }

        return {
            handleClose, handleOpen
        }
    },
    computed: {
        routes() {
            return this.$router.options.routes
        },
    },
    template: `<el-scrollbar wrap-class="scrollbar-wrapper">
    <el-menu
        active-text-color="#ffd04b"
        background-color="#304156"
        class="el-menu-vertical-demo"
        text-color="#fff"
        :collapse="isCollapse"
        @open="handleOpen"
        @close="handleClose"
        :collapse-transition="false"
    >
      <div v-for="item in routes">
        <div v-if="!item.hidden">
          <el-sub-menu :index="item.path" :key="item.path">
            <template #title>
              <el-icon v-if="item.meta && item.meta.icon">
                <component :is="item.meta.icon"/>
              </el-icon>
              <span>{{ item.name }}</span>
            </template>
            <el-sub-menu v-if="item.children" v-for="child in item.children" :index="child.path" :key="child.path">
              <el-icon>
                <component :is="child.meta.icon"/>
              </el-icon>
              <span>{{ child.meta.name }}</span>
            </el-sub-menu>
          </el-sub-menu>
        </div>
      </div>
    </el-menu>
  </el-scrollbar>`,
}

<template>
  <el-scrollbar wrap-class="scrollbar-wrapper">
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
              <el-icon>
                <component :is="item.meta.icon"/>
              </el-icon>
              <span>{{ item.name }}</span>
            </template>
            <div v-if="item.children">
              <el-menu-item v-for="child in item.children" :index="child.path">
                <span>{{ child.meta.title }}</span>
              </el-menu-item>
            </div>
          </el-sub-menu>
        </div>
      </div>
    </el-menu>
  </el-scrollbar>
</template>

<script>
export default {
  name: "test"
}
</script>

<style scoped>

</style>

import {ref, defineModel} from 'vue';

export default {
    setup() {
        const isCollapse = defineModel('is-collapse')

        return {isCollapse}
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
    },
    template: `
        <el-menu active-text-color="#ffd04b" background-color="#304156" class="el-menu-vertical-demo" text-color="#fff"
          :collapse="isCollapse" @open="handleOpen" @close="handleClose">
          <el-sub-menu index="1">
            <template #title>
              <el-icon>
                <location />
              </el-icon>
              <span>Navigator One</span>
            </template>
            <el-menu-item index="1-4-1">item one</el-menu-item>
            <el-sub-menu index="1-4">
              <template #title>item four</template>
              <el-menu-item index="1-4-1">item one</el-menu-item>
            </el-sub-menu>
          </el-sub-menu>
        </el-menu>
    `,
}

<template>
  <n-layout class="layout" has-sider>
    <n-layout-sider
      show-trigger="bar"
      @collapse="collapsed = true"
      @expand="collapsed = false"
      :collapsed="collapsed"
      collapse-mode="width"
      :collapsed-width="64"
      :width="leftMenuWidth"
      :native-scrollbar="false"
      class="layout-sider"
    >
      <Logo :collapsed="collapsed" />
    </n-layout-sider>
  </n-layout>
</template>

<script lang="ts" setup>
import { ref, unref, computed, onMounted } from 'vue'
import { Logo } from './components/Logo'
const collapsed = ref<boolean>(false)
const leftMenuWidth = computed(() => {
  return collapsed.value ? 64 : 200
})
</script>

<style lang="less" scoped>
.layout {
  display: flex;
  flex-direction: row;
  flex: auto;

  &-default-background {
    background: #f5f7f9;
  }

  .layout-sider {
    min-height: 100vh;
    box-shadow: 2px 0 8px 0 rgb(29 35 41 / 5%);
    position: relative;
    z-index: 13;
    transition: all 0.2s ease-in-out;
  }

  .layout-sider-fix {
    position: fixed;
    top: 0;
    left: 0;
  }

  .ant-layout {
    overflow: hidden;
  }

  .layout-right-fix {
    overflow-x: hidden;
    padding-left: 200px;
    min-height: 100vh;
    transition: all 0.2s ease-in-out;
  }

  .layout-content {
    flex: auto;
    min-height: 100vh;
  }

  .n-layout-header.n-layout-header--absolute-positioned {
    z-index: 11;
  }

  .n-layout-footer {
    background: none;
  }
}
</style>

<template>
  <NConfigProvider>
    <AppProvider>
      <RouterView />
    </AppProvider>
  </NConfigProvider>
</template>

<script setup lang="ts">
import AppProvider from '@/components/Application/index.vue'
</script>
<style></style>

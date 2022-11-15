<script lang="ts">
import MainHeader from "@/views/MainHeader.vue";
import MainFooter from "@/views/MainFooter.vue";
export default {
  name: "App",
  components: {
    MainHeader,
    MainFooter,
  },
};
</script>

<template>
  <div>
    <main-header class="header" />
    <RouterView class="outer_dpage" />
    <main-footer class="outer-footer" />
  </div>
</template>

<style>
header {
  height: 100px;
}
.outer_dpage {
  margin-top: 100px;
  min-height: calc(100vh - 200px - 50px);
}
.outer-footer {
  height: 50px;
}
</style>

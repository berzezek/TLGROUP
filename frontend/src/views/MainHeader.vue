<template>
  <div class="navbar navbar-fixed-top">
    <div class="navbar-inner">
      <div class="container-fluid">
        <a
          class="btn btn-navbar"
          data-toggle="collapse"
          data-target=".nav-collapse"
        >
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </a>
        <a class="brand" href="#">TL GROUP</a>
        <div>
          <ul class="nav">
            <li v-for="item in menu" :key="item.path">
              <router-link :to="item.path">{{ item.title }}</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "MainHeader",
  setup() {
    const menu = [
      {
        title: "Приложение",
        path: "/",
      },
      {
        title: "API документация",
        path: "/open-api",
      },
      {
        title: "О приложении",
        path: "/about",
      },
      {
        title: "Контакты",
        path: "/contacts",
      },
    ];
    return {
      menu,
    };
  },
};
</script>

<style scoped></style>

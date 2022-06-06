<template>
  <SiteHeader />
  <router-view :key="$route.fullPath" />
</template>

<script>
import SiteHeader from "./components/SIteHeader.vue";
export default {
  components: {
    SiteHeader,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap");
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Nunito Sans";
  background-color: #fafafa;
}

.container {
  max-width: 1280px;
  margin: 0 auto;
}
</style>

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

:root {
  /* Variables for default theme (light-mode) */
  --primary-bg: white;
  --body-bg: #f2f2f2;
  --text-color: #111517;
  --box-shadow: rgba(0, 0, 0, 0.0532439);
  --item-box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px,
    rgba(0, 0, 0, 0.1) 0px 2px 4px 0px,
    rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
  --border-country-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.104931);
}

[data-theme="darkMode"] {
  /* Variables for dark mode */
  --primary-bg: #2b3844;
  --body-bg: #202c36;
  --text-color: white;
  --box-shadow: rgba(0, 0, 0, 0.0562443);
  --item-box-shadow: rgba(255, 255, 255, 0.2) 0px 12px 28px 0px,
    rgba(255, 255, 255, 0.1) 0px 2px 4px 0px;
  --border-country-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0562443);
}

body {
  font-family: "Nunito Sans";
  background-color: var(--body-bg);
  color: var(--text-color);
}

.container {
  max-width: 1280px;
  margin: 0 auto;
}

@media screen and (max-width: 450px) {
  .container {
    max-width: 340px;
  }
}
</style>

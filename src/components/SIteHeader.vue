<template>
  <header class="site-header">
    <div class="container site-header__container">
      <router-link to="/" class="site-logo">Where in the world?</router-link>
      <button class="mode-btn" @click="toggleTheme">
        <span>
          <fa v-if="this.theme == 'darkMode'" icon="sun" class="icon" />
          <fa v-else icon="moon" />
        </span>
        <span class="mode" v-if="this.theme == 'darkMode'">Light Mode</span>
        <span class="mode" v-else>Dark Mode</span>
      </button>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      theme: "", //When this property is empty, the theme is set to the default theme i.e. light mode.
    };
  },

  mounted() {
    let localTheme = localStorage.getItem("theme"); //gets stored theme value if any
    document.documentElement.setAttribute("data-theme", localTheme); // updates the data-theme attribute
  },

  methods: {
    toggleTheme() {
      this.theme = this.theme == "darkMode" ? "" : "darkMode"; //toggles theme value
      document.documentElement.setAttribute("data-theme", this.theme); // updates the data-theme attribute
      localStorage.setItem("theme", this.theme); // stores theme value in local storage
    },
  },
};
</script>

<style scoped>
.site-header {
  background: var(--primary-bg);
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0562443);
  padding: 24px 0;
}

.site-header__container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.site-logo {
  color: var(--text-color);
  font-size: 28px;
  font-weight: 800;
  line-height: 33px;
  text-decoration: none;
  font-family: "Nunito Sans";
}

.mode-btn {
  border: none;
  outline: hidden;
  background-color: transparent;
  font-family: "Nunito Sans";
  cursor: pointer;
}

.mode {
  display: inline-block;
  margin-left: 8px;
  font-size: 16px;
  line-height: 22px;
  font-weight: 600;
  color: var(--text-color);
}

.icon {
  color: var(--text-color);
}

@media screen and (max-width: 450px) {
  .site-logo {
    font-size: 14px;
    line-height: 20px;
  }

  .mode-btn,
  .mode {
    font-size: 12px;
    line-height: 16px;
  }
}
</style>

<template>
  <header class="site-header">
    <div class="container site-header__container">
      <router-link to="/" class="site-logo">Where in the world?</router-link>
      <button class="mode-btn">
        <fa icon="moon" />
        <span class="mode">Dark Mode</span>
      </button>
    </div>
  </header>
</template>

<style scoped>
.site-header {
  background: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0562443);
  padding: 24px 0;
}

.site-header__container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.site-logo {
  color: #111517;
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
}

.mode {
  display: inline-block;
  margin-left: 8px;
  font-size: 16px;
  line-height: 22px;
  font-weight: 600;
  color: #111517;
}
</style>

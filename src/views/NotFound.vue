<template>
  <div class="container">
    <h2>404</h2>
    <h3>Page not found</h3>
    <router-link to="/" class="back-lnk"
      ><fa icon="arrow-left" class="icon" /> Home Page</router-link
    >
  </div>
</template>

<style scoped>
.container {
  padding-top: 150px;
  color: #111517;
  display: flex;
  flex-direction: column;
  align-items: center;
}

h2 {
  text-align: center;
  font-size: 56px;
  margin-bottom: 10px;
}

h3 {
  font-size: 48px;
  text-align: center;
  margin-bottom: 45px;
}

.back-lnk {
  display: inline-block;
  margin: 0 auto;
  background: #ffffff;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.293139);
  border-radius: 6px;
  padding: 10px 32px;
  text-decoration: none;
  color: #111517;
  font-size: 16px;
  line-height: 20px;
  font-weight: 300;
  transition: all 0.3s ease;
  display: inline-block;
}

.back-lnk:hover {
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.293139);
}

.icon {
  margin-right: 10px;
}
</style>

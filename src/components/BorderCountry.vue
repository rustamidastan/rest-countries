<template>
  <router-link
    :to="{ name: 'CountryInfo', params: { alphaCode: borderCount } }"
    class="border-country"
  >
    {{ borderCount }}
  </router-link>
</template>

<script>
export default {
  props: {
    borderCount: String,
  },
};
</script>

<style scoped>
.border-country {
  width: 76px;
  height: 26px;
  margin-bottom: 10px;
  box-shadow: var(--border-country-shadow);
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--primary-bg);
}

.border-country:not(:last-child) {
  margin-right: 10px;
}

a {
  color: var(--text-color);
  font-weight: 300;
  font-size: 14px;
  line-height: 20px;
  text-decoration: none;
  transition: all 0.3 ease;
}

a:hover {
  opacity: 0.8;
}
</style>

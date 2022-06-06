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
  box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.104931);
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.border-country:not(:last-child) {
  margin-right: 10px;
}

a {
  color: #111517;
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

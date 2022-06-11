<template>
  <div class="country-item">
    <img :src="country.flags.png" alt="" />

    <div class="country-item__info">
      <h4 class="country-item__name">{{ country.name }}</h4>
      <ul class="country-item__list">
        <li>
          <span class="country-item-title">Population: </span>
          {{ country.population }}
        </li>
        <li>
          <span class="country-item-title">Region: </span>
          {{ country.region }}
        </li>
        <li>
          <span class="country-item-title">Capital: </span>
          {{ country.capital }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "CountryComp",
  props: {
    country: Object,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.country-item {
  width: 265px;
  margin: 0 auto;
  border-radius: 5px;
  background-color: var(--primary-bg);
  cursor: pointer;
  transition: all 0.3s ease;
}

.country-item:hover {
  box-shadow: var(--item-box-shadow);
}

img {
  width: 265px;
  height: 160px;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
}
.country-item__info {
  padding: 24px;
  padding-bottom: 46px;
}
.country-item__name {
  font-size: 18px;
  line-height: 26px;
  font-weight: 800;
  color: var(--text-color);
  margin-bottom: 16px;
}

.country-item__list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.country-item__list li:not(:last-child) {
  margin-bottom: 8px;
  font-size: 14px;
  line-height: 16px;
  font-weight: 300;
}
.country-item-title {
  font-weight: 600;
}
</style>

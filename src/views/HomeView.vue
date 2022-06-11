<template>
  <div class="container">
    <form class="my-form">
      <div class="input-wrapper">
        <fa icon="magnifying-glass" />
        <input type="text" placeholder="search a country.." v-model="search" />
      </div>
      <div class="select">
        <select v-model="region">
          <option value="All">All</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
          <span class="focus"></span>
        </select>
      </div>
    </form>
  </div>
  <div class="home" v-if="filtredCountries">
    <div v-for="(country, index) in searchedCountries" :key="index">
      <router-link
        :to="{ name: 'CountryInfo', params: { alphaCode: country.alpha3Code } }"
      >
        <CountryComp :country="country" />
      </router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import CountryComp from "@/components/CountryComp.vue";

export default {
  name: "HomeView",
  components: {
    CountryComp,
  },

  data() {
    return {
      region: "All",
      search: "",
    };
  },

  mounted() {
    this.$store.dispatch("setCountries");
  },

  computed: {
    countries() {
      return this.$store.state.countries;
    },

    filtredCountries() {
      if (this.region === "All") {
        return this.countries;
      } else {
        let sorted = this.countries.filter((country) => {
          return country.region === this.region;
        });
        return sorted;
      }
    },

    searchedCountries() {
      if (this.search === "") {
        return this.filtredCountries;
      } else {
        return this.filtredCountries.filter((country) =>
          country.name.toLowerCase().includes(this.search.toLowerCase())
        );
      }
    },
  },
};
</script>

<style>
.home {
  padding-top: 50px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  max-width: 1280px;
  margin: 0 auto;
  grid-row-gap: 75px;
  grid-column-gap: 75px;
}

a {
  text-decoration: none;
  color: var(--text-color);
}

.my-form {
  padding-top: 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.input-wrapper {
  width: 480px;
  height: 56px;
  padding: 19px 32px;
  background: var(--primary-bg);
  box-shadow: 0px 2px 9px var(--box-shadow);
  border-radius: 5px;
}

.input-wrapper input {
  margin-left: 24px;
  outline: none;
  border: none;
  font-size: 14px;
  line-height: 20px;
  width: 350px;
  background-color: var(--primary-bg);
  color: var(--text-color);
}

.input-wrapper input::placeholder {
  color: var(--text-color) !important;
}

select {
  appearance: none;
  background-color: transparent;
  border: none;
  padding: 0 1em 0 0;
  margin: 0;
  width: 100%;
  font-family: inherit;
  font-size: inherit;
  cursor: inherit;
  line-height: inherit;
  outline: none;
  padding: 18px 24px;
  border-radius: 5px;
  color: var(--text-color);
  background: var(--primary-bg);
}

select::-ms-expand {
  display: none;
}

.select {
  width: 200px;
  height: 56px;
  position: relative;
  border-radius: 5px;
  font-size: 14px;
  cursor: pointer;
  line-height: 20px;
  background: var(--primary-bg);
  box-shadow: 0px 2px 9px var(--box-shadow);
  display: grid;
  grid-template-areas: "select";
  align-items: center;
}

.select::after {
  content: "";
  width: 0.8em;
  height: 0.5em;
  margin-right: 14px;
  background-color: var(--text-color);
  clip-path: polygon(100% 0%, 0 0%, 50% 100%);
  justify-self: end;
}

select,
.select:after {
  grid-area: select;
}

select:focus + .focus {
  position: absolute;
  top: -1px;
  left: -1px;
  right: -1px;
  bottom: -1px;
  border: 2px solid var(--select-focus);
  border-radius: inherit;
}

option {
  cursor: pointer;
  font-size: 14px;
  line-height: 20px;
  margin-bottom: 8px !important;
}

@media screen and (max-width: 450px) {
  .my-form {
    flex-direction: column;
    align-items: start;
  }

  .input-wrapper {
    width: 343px;
    margin-bottom: 40px;
  }

  .input-wrapper input {
    width: auto;
  }

  .home {
    grid-template-columns: 1fr;
    grid-row-gap: 40px;
  }
}
</style>

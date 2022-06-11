<template>
  <div class="country-info">
    <div class="infos-wrapper" v-if="country">
      <div class="container">
        <router-link to="/" class="back-lnk"
          ><fa icon="arrow-left" class="icon" />Back</router-link
        >
        <div class="infos">
          <img :src="country.flags.png" alt="" class="country-flag" />

          <div class="main-infos">
            <h3 class="country-name">{{ country.name }}</h3>

            <div class="infos__list-wrapper">
              <ul class="infos-list">
                <li class="infos-list__item">
                  <span class="info-item-title">Native Name: </span>
                  {{ country.nativeName }}
                </li>
                <li class="infos-list__item">
                  <span class="info-item-title">Population: </span>
                  {{ country.population }}
                </li>
                <li class="infos-list__item">
                  <span class="info-item-title">Region: </span>
                  {{ country.region }}
                </li>
                <li class="infos-list__item">
                  <span class="info-item-title">Sub Region: </span>
                  {{ country.subregion }}
                </li>
                <li class="infos-list__item">
                  <span class="info-item-title">Capital: </span>
                  {{ country.capital }}
                </li>
              </ul>

              <ul class="infos-list">
                <li class="infos-list__item">
                  <span class="info-item-title">Top Level Domain: </span>
                  {{ country.topLevelDomain[0] }}
                </li>
                <li class="infos-list__item">
                  <span class="info-item-title">Currencies: </span>
                  {{ country.currencies[0].name }}
                </li>
                <li class="infos-list__item">
                  <span class="info-item-title">Languages: </span>
                  {{ country.languages[0].name }}
                </li>
              </ul>
            </div>

            <div class="info-border-countries" v-if="country.borders">
              <span class="title">Border Countries: </span>
              <div class="border-countries">
                <BorderCountry
                  v-for="(borderCount, index) in country.borders"
                  :key="index"
                  :borderCount="borderCount"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BorderCountry from "../components/BorderCountry.vue";
import CountryService from "@/services/CountryService";

export default {
  components: {
    BorderCountry,
  },
  props: ["alphaCode"],
  data() {
    return {
      country: null,
    };
  },
  created() {
    CountryService.getEvent(this.alphaCode)
      .then((response) => {
        this.country = response.data;
      })

      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style scoped>
.infos-wrapper {
  padding-top: 80px;
}

.back-lnk {
  background: #ffffff;
  box-shadow: var(--border-country-shadow);
  border-radius: 6px;
  padding: 10px 32px;
  text-decoration: none;
  color: var(--text-color);
  font-size: 16px;
  line-height: 20px;
  font-weight: 300;
  transition: all 0.3s ease;
  display: inline-block;
  background-color: var(--primary-bg);
}

.back-lnk:hover {
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.293139);
}

.icon {
  margin-right: 10px;
}

.infos {
  padding-top: 80px;
  padding-bottom: 350px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.country-flag {
  width: 560px;
  height: 400px;
  background: #808080;
  box-shadow: 0px 0px 4px 4px rgba(0, 0, 0, 0.0294384);
  border-radius: 10.0057px;
}

.main-infos {
  width: 600px;
}

.country-name {
  font-size: 32px;
  line-height: 44px;
  font-weight: 800;
  margin-bottom: 23px;
  color: var(--text-color);
}

.infos__list-wrapper {
  display: flex;
  justify-content: space-between;
  margin-bottom: 70px;
}

.infos-list {
  list-style: none;
}

.infos-list__item {
  font-size: 16px;
  line-height: 32px;
  font-weight: 300;
  color: var(--text-color);
  font-family: "Nunito Sans";
}

.info-item-title {
  font-weight: 600;
}

.info-border-countries {
  display: flex;
  flex-direction: column;
}

.info-border-countries .title {
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  margin-right: 15px;
  display: inline-block;
  width: 141px;
  margin-bottom: 15px;
}

.border-countries {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}

@media screen and (max-width: 450px) {
  .back-lnk {
    margin-bottom: 64px;
  }

  .infos {
    flex-direction: column;
    padding-top: 0;
    padding-bottom: 60px;
  }

  .country-flag {
    width: 320px;
    height: 230px;
    margin-bottom: 44px;
  }

  .main-infos {
    width: 345px;
  }

  .infos__list-wrapper {
    display: flex;
    flex-direction: column;
    margin-bottom: 34px;
  }

  .infos__list-wrapper .infos-list:first-child {
    margin-bottom: 32px;
  }
}
</style>

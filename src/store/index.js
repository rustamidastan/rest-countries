import { createStore } from "vuex";
import CountryService from "@/services/CountryService";

export default createStore({
  state: {
    countries: [],
  },
  mutations: {
    SET_COUNTRIES(state, countries) {
      state.countries = countries;
    },
  },
  actions: {
    setCountries({ commit }) {
      CountryService.getEvents()
        .then((response) => {
          commit("SET_COUNTRIES", response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  modules: {},
});

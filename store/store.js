import { action, observable, toJS } from 'mobx';
import { fetchCountriesApi, fetchCurrenciesApi } from '../api/apiService';
import { AsyncStorage } from 'react-native';

class Store {
    @observable countries = [];
    @observable selectedCountry = null;
    @observable fetchCountryError = null;
    @observable isCountriesFetching = false;

    @observable currencies = [];
    @observable selectedCurrency = null;
    @observable fetchCurrenciesError = null;
    @observable isCurrenciesFetching = false;

    @action
    setSelectedCountry = selectedCountry => {
        this.selectedCountry = selectedCountry;
        if (!this.selectedCurrency) {
            this.setSelectedCurrency(
                this.currencies.find((currency) => currency._id === selectedCountry.preferredCurrency.id) || null
            );
        }
        this.saveStore();
    }

    @action
    setSelectedCurrency = selectedCurrency => {
        this.selectedCurrency = selectedCurrency;
        this.saveStore();
    }

    @action
    fetchCountries = async () => {
        this.fetchCountryError = null;
        try {
            this.isCountriesFetching = true;
            const { items } = await fetchCountriesApi();
            this.countries = items;
            this.isCountriesFetching = false;
            this.saveStore();
            return true;
        } catch(err) {
            this.isCountriesFetching = false;
            this.isCountriesFetching = err;
            return false;
        }
    }

    @action
    fetchCurrencies = async () => {
        this.fetchCurrenciesError = null;
        try {
            this.isCurrenciesFetching = true;
            const { items } = await fetchCurrenciesApi();
            this.currencies = items;
            this.isCurrenciesFetching = false;
            this.saveStore();
            return true;
        } catch(err) {
            this.isCurrenciesFetching = false;
            this.fetchCurrenciesError = err;
            return false;
        }
    }

    @action
    clearSelectedValues = async () => {
        this.selectedCurrency = null;
        this.selectedCountry = null;
        this.saveStore();
    }

    @action
    saveStore = async () => {
        await AsyncStorage.setItem('store', JSON.stringify({...this}));
    }

    bootStore = async () => {
        try {
            let store = await AsyncStorage.getItem('store') || JSON.stringify(toJS(this));
            store = JSON.parse(store);
            for (const key in store) {
                this[key] = store[key];
            }
        } catch(e) {}

    }
}

const store = new Store();

export default store;
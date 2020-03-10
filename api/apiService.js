import api from './urls';

export const fetchCountriesApi = () => fetch(api.COUNTRIES).then(json => json.json());

export const fetchCurrenciesApi = () => fetch(api.CURRENCIES).then(json => json.json());
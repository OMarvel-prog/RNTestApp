import React, { useEffect } from 'react';
import { SafeAreaView, View } from 'react-native';
import { inject, observer } from 'mobx-react';
import { PickersContainer } from '../../components/PickersContainer/PickersContainer';
import styles from './styles';
import { BottomMenu } from '../../components/BottomMenu/BottomMenu';

function MainScreen(props) {

    const {
        fetchCountries,
        fetchCurrencies,
        countries,
        selectedCountry,
        setSelectedCountry,
        currencies,
        selectedCurrency,
        setSelectedCurrency,
        clearSelectedValues,
    } = props.store;

    useEffect(() => {
        async function fetchData() {
            await Promise.all([fetchCountries(), fetchCurrencies()]);
        }
        fetchData();
    }, []);

    return (
        <View style={styles.container}>
            <SafeAreaView>
                <PickersContainer
                    clearSelected={clearSelectedValues}
                    countries={countries}
                    currencies={currencies}
                    selectedCountry={selectedCountry}
                    selectedCurrency={selectedCurrency}
                    setSelectedCountry={setSelectedCountry}
                    setSelectedCurrency={setSelectedCurrency}
                />
                <BottomMenu/>
            </SafeAreaView>
        </View>
    );
}

export default inject('store')(observer(MainScreen));

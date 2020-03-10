import React, { useCallback } from 'react';
import { View } from 'react-native';
import styles from './styles';
import { Button } from '../Button/Button';
import { Dropdown } from '../Dropdown/Dropdown';
import images from '../../res/images';

export function PickersContainer({
                                     clearSelected,
                                     selectedCountry,
                                     countries,
                                     selectedCurrency,
                                     currencies,
                                     setSelectedCountry,
                                     setSelectedCurrency,
}) {

    const onCountryChanged = useCallback((selectedItem) => {
        setSelectedCountry(selectedItem);
    }, [selectedCountry]);

    const onCurrencyChanged = useCallback((selectedItem) => {
        setSelectedCurrency(selectedItem);
    }, [selectedCurrency]);

    return (
        <View styles={styles.container}>
            <View style={styles.buttonContainer}>
                <View style={styles.negativeBorder}/>
                <View style={styles.helpContainer}/>
                <Button onPress={clearSelected} icon={images.close}/>
                <View style={styles.positiveBorder}/>
            </View>
            <View style={styles.pickerContainer}>
                <Dropdown
                    containerStyle={styles.dropdown}
                    selectedValue={selectedCountry}
                    onValueChange={onCountryChanged}
                    initialItemTitle={'Country...'}
                    selectedValueTitle={selectedCountry && selectedCountry.translations.en}
                    data={countries}

                />
                <Dropdown
                    selectedValue={selectedCurrency}
                    onValueChange={onCurrencyChanged}
                    initialItemTitle={'Currency...'}
                    selectedValueTitle={selectedCurrency && selectedCurrency.translations.en}
                    data={currencies}
                />
            </View>
        </View>
    );
}

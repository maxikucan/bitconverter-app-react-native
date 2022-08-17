import { View, StyleSheet, Button } from "react-native";
import { useState } from "react";
import Card from "../components/Card";
import SelectDropdown from "react-native-select-dropdown";
import { currenciesList, cryptoList } from "../utils/CoinData";
import { getValues } from "../service/getValues";

export default function Convertion() {
    const [data, setData] = useState(null);
    const [currency, setCurrency] = useState('USD');
    const [crypto, setCrypto] = useState('BTC');
    const [isLoading, setIsLoading] = useState(false);

    const searchCrypto = () => {
        setIsLoading(true);
        getValues(crypto, currency).then(data => {
            setData(data)
            setIsLoading(false);
        })
    }

    const handleSelectCurrency = (selection) =>{
        setCurrency(selection);
    }

    const handleSelectCrypto = (selection) =>{
        setCrypto(selection);
    }


    return (
        <View style={styles.container}>
            <Card data={data} isLoading={isLoading}/>
            <View style={styles.button} >
                <Button title={data ? 'Refresh' : 'Search'} onPress={searchCrypto} />
            </View>
            <View>
                <SelectDropdown data={currenciesList} defaultButtonText="USD" buttonStyle={styles.selector} onSelect={handleSelectCurrency} />
                <SelectDropdown data={cryptoList} defaultButtonText="BTC" buttonStyle={styles.selector} onSelect={handleSelectCrypto} />
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    button: {
        margin: 20,
    },
    selector: {
        backgroundColor: "#E2DCDC",
        borderRadius: 8,
        margin: 10,
        width: 350
    }
})

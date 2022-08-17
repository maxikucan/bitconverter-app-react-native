import { StyleSheet, View, Text } from "react-native"

const Card = ({ data, isLoading }) => {
    return (
        <View style={styles.box}>
            <Text>Selected Crypto: </Text>
            <Text style={styles.text}>{isLoading ? 'Searching...' : data?.asset_id_base}</Text>
            <Text>Selected Currency: </Text>
            <Text style={styles.text}>{isLoading ? 'Searching...' : data?.asset_id_quote}</Text>
            <Text>Price: </Text>
            <Text style={styles.text}>{isLoading ? 'Searching...' : data?.rate}</Text>
        </View>
    )
}

export default Card

const styles = StyleSheet.create({
    box: {
        backgroundColor: "#B0A19D",
        margin: 10,
        padding: 20,
        width: 300,
        borderRadius: 8
    },
    text: {
        fontSize: 15,
        margin: 5,
        fontWeight: 'bold',
    }
})
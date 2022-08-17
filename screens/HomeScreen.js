import { View, Text, StyleSheet, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>₿ITCONVERTER</Text>
            </View>
            <View>
                <Button title="Convert" onPress={() => navigation.navigate("Convertion")} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: '#fff'
    },
    title: {
        fontSize: 24,
        fontWeight: "bold"
    }
})

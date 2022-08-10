import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { useState } from "react";

export default function HomeScreen() {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>₿ITCONVERTER</Text>
            </View>
            <View>
                <Button title="Convert" onPress={() => navigation.navigate("Convertion")} />

                {/* <TouchableOpacity style={styles.buttonDark}>
                    <Text style={styles.buttonDarkText}>
                        Dark Mode
                    </Text>
                </TouchableOpacity>  */}
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
    containerDark: {
        backgroundColor: '#000'
    },
    buttonDark: {
        backgroundColor: '#000',
        height: 30,
        width: 100,
        margin: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
    },
    buttonLight: {
        backgroundColor: '#fff',
        height: 30,
        width: 100,
        margin: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
    },
    buttonLightText: {
        color: '#000'
    },
    buttonDarkText: {
        color: '#fff'
    },
    title: {
        fontSize: 24,
        fontWeight: "bold"
    }
})
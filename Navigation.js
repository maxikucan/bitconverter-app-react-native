import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import Convertion from "./screens/Convertion";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const HomeStackNavigator = createNativeStackNavigator();

const MyStack = () => {
    return (
        <HomeStackNavigator.Navigator>
            <HomeStackNavigator.Screen
                name="Menu"
                component={HomeScreen}
                options={{headerTitleAlign: "center"}}/>
            <HomeStackNavigator.Screen
                name="Convertion"
                component={Convertion} 
                options={{headerTitleAlign: "center"}}
                />
        </HomeStackNavigator.Navigator>
    )
}

export default function Navigation(){
    return(
        <NavigationContainer>
            <MyStack />
        </NavigationContainer>
    )
}
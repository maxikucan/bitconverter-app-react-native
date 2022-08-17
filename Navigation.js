import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import Convertion from "./screens/Convertion";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const MyStack = () => {
    return (
        /**
         * First screen in stack is default Home Screen. But you can change it adding "initialRouteName" prop
         * in Navigator component.
        */
        <Stack.Navigator>
            <Stack.Screen
                name="Menu"
                component={HomeScreen}
                options={{headerTitleAlign: "center"}}/>
            <Stack.Screen
                name="Convertion"
                component={Convertion} 
                options={{headerTitleAlign: "center"}}
                />
        </Stack.Navigator>
    )
}

export default function Navigation(){
    return(
        <NavigationContainer>
            <MyStack />
        </NavigationContainer>
    )
}
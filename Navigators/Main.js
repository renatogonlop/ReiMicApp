import React, { useContext } from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons';

//Stacks
import ProductContainer from "../src/pages/Products/ProductContainer";
import RegisterScreen from "../src/pages/RegisterScreen/RegisterScreen";

const Tab = createBottomTabNavigator();

const Main = () => {

    return (


        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = focused
                            ? 'ios-home'
                            : 'ios-home-outline';
                    } else if (route.name === 'Carrinho') {
                        iconName = focused ? 'ios-cart' : 'ios-cart-outline';
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: '#4574f5bd',
                tabBarInactiveTintColor: 'gray',
                headerShown: false,
            })}
        >
            <Tab.Screen name="Home" component={ProductContainer} />
            <Tab.Screen name="Carrinho" component={RegisterScreen} />
        </Tab.Navigator>



    )

}

export default Main;
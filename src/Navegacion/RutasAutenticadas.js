import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from '@expo/vector-icons';


import TiendaStack from "./TiendaStack";
import PerfilStack from "./PerfilStack";
import MiTienda from "./MiTiendaStack";

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const TabBar = () => {
    return (
        <Tab.Navigator
            initialRouteName="tienda"
            tabBarOptions={{
                activeTintColor:"#000",
                activeBackgroundColor: "#feb72b",
                inactiveTintColor: "#FFF",
                inactiveBackgroundColor: "#527318"
            }}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color }) => mostrarIcono(route, color),
            })}
        >
            <Tab.Screen
                name="tienda"
                component={TiendaStack}
                options={{ 
                    title: "Tienda",
                }}
            />
            <Tab.Screen
                name="mitienda"
                component={MiTienda}
                options={{ 
                    title: "",
                }}
            />
            <Tab.Screen
                name="cuenta"
                component={PerfilStack}
                options={{ 
                    title: "Cuenta",
                }}
            />
        </Tab.Navigator>
    );
};

function mostrarIcono(route, color) {
    let iconName = "";
    switch (route.name) {
        case "tienda":
            iconName = "ios-home";
            break;
        case "cuenta":
            iconName = "ios-contract";
            break;
        case "mitienda":
            iconName = "ios-chatbox";
            break;
    }

    return (
        <Ionicons name={iconName} size={24} color={color}/>
    );
}

export default function RutasAutenticadas() {
    return (
        <NavigationContainer>
            <TabBar />
        </NavigationContainer>
    );
}
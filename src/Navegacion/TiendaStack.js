import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Tienda from '../Pantallas/Tienda/Tienda';
import MensajesList from '../Pantallas/Tienda/MensajesList';
import Detalle from '../Pantallas/Tienda/Detalle';
import Contacto from '../Pantallas/Tienda/Contacto';
import AddProducto from '../Pantallas/Tienda/AddProducto';

//pila de navegacion
const Stack= createStackNavigator();

export default function TiendaStack()
{
    return(
        <Stack.Navigator>
            <Stack.Screen
            component={Tienda}
            name="tienda"
            options={{ headerShow: false}}
            />
            <Stack.Screen
            component={AddProducto}
            name="addProducto"
            options={{ title: "Agregar Nuevo Producto",
            headerStyle: {backgroundColor: "#128C7E"},
            headerTinColor: "#fff"
        }}
            />
            <Stack.Screen
            component={Detalle}
            name="detalle"
            options={{ 
                headerTransparent: true, 
                headerTinColor: "#128C7E",
                title: "",
            }}
            />
            <Stack.Screen
            component={MensajesList}
            name="mensajes"
            options={{ title: "Agregar Nuevo Producto",
            headerStyle: {backgroundColor: "#128C7E"},
            headerTinColor: "#fff"
        }}
            />
            <Stack.Screen
            component={Contacto}
            name="contacto"
            options={{ title: "Agregar Nuevo Producto",
            headerStyle: {backgroundColor: "#128C7E"},
            headerTinColor: "#fff"
        }}
            />
            
        </Stack.Navigator>
    );
}
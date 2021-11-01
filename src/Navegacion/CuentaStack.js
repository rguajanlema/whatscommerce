import React from 'react';
import { createStackNavigator } from '@react-navigation/native';

import ConfirmarNumero from '../Pantallas/Cuenta/ConfirmarNumero';
import EnviarConfirmacion from '../Pantallas/Cuenta/EnviarConfirmacion';

const Stack = createStackNavigator();

export default function CuentaStack()
{
    return(
        <Stack.Navigator>
            <Stack.Screen
            component={EnviarConfirmacion}
            name="enviar-confirmacion"
            options={{
                title: "Confirma tu Numero de telefono",
                headerStyle: { backgroundColor: "#128c7E"},
                headerTinColor: "#fff",
            }}
            />
            <Stack.Screen
            component={ConfirmarNumero}
            name="confirmar-movil"
            options={{
                title: "Confirma Numero",
                headerStyle: { backgroundColor: "#128c7E"},
                headerTinColor: "#fff",
            }}
            />
        </Stack.Navigator>
    )
}
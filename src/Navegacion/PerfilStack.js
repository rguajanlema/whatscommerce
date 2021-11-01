import React from 'react';
import { createStackNavigator } from '@react-navigation/native';

import Perfil from '../Pantallas/Perfil/Perfil';

const Stack = createStackNavigator();

export default function PerfilStack()
{
    return (
        <Stack.Navigator>
            <Stack.Screen
            component = {Perfil}
            name="perfil"
            options={{ headerShow: false}}
            />
        </Stack.Navigator>
    );
}
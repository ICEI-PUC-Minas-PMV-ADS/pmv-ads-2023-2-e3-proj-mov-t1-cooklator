import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CadastroReceita from './components/CadastrarReceita';
import CadastroMaterial from './components/CadastroMaterial';

const Stack = createStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="CadastrarReceita">
                <Stack.Screen name="CadastrarReceita" component={CadastroReceita} options={{ title: 'Cadastrar Receita' }} />
                <Stack.Screen name="CadastroMaterial" component={CadastroMaterial} options={{ title: 'Cadastro de Material' }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
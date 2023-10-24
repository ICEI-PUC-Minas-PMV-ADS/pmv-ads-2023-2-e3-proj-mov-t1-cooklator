import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Receitas from "./pages/Receitas";
import CadastroMaterial from "./components/CadastroMaterial";
import { View, StyleSheet } from "react-native";
import CadastroReceita from "./components/CadastrarReceita";
import Materials from "./pages/Materials";

const AppStack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator initialRouteName="Receitas">
        <AppStack.Screen name="Receitas" component={Receitas} />
        {/*<AppStack.Screen name="TelaProjetosAndamento" component={TelaProjetosAndamento} />*/}
        {/*<AppStack.Screen name="TelaProjetosFinalizados" component={TelaProjetosFinalizados} />*/}
        <AppStack.Screen
          name="CadastrarReceita"
          component={CadastroReceita}
          options={{ title: "Receitas" }}
        />
        <AppStack.Screen
          name="CadastroMaterial"
          component={CadastroMaterial}
          options={{ title: "Cadastrar Receita" }}
        />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default App;

import React from "react";
import {StyleSheet, View} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import Recipes from "./pages/Recipes";
import CadastroMaterial from "./components/CadastroMaterial";
import CreateRecipe from "./components/CreateRecipe";
import FloatingMenu from "./components/FloatingMenu";
import RecipesInProgress from "./pages/ReceipesInProgress";
import cardRecipe from "./components/CardRecipe";
import receipesInProgress from "./pages/ReceipesInProgress";
import createRecipe from "./components/CreateRecipe";
import recipes from "./pages/Recipes";

const AppStack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <View style={styles.container}>

                <View style={styles.containerNavigator}>
                    <AppStack.Navigator initialRouteName="Recipes">
                        <AppStack.Screen name="Receitas" component={Recipes} />
                        {/*<AppStack.Screen name="TelaProjetosAndamento" component={TelaProjetosAndamento} />*/}
                        {/*<AppStack.Screen name="TelaProjetosFinalizados" component={TelaProjetosFinalizados} />*/}
                        <AppStack.Screen
                            name="CadastrarReceita"
                            component={CreateRecipe}
                            options={{
                                title: "Receitas",
                                headerStyle: {
                                    backgroundColor: "#64CCC5",
                                    shadowOpacity: 0,
                                    elevation: 0,
                                },
                                headerTitleStyle: { color: "white" },
                                presentation: {
                                    color: "#64CCC5"
                                }
                            }}
                        />
                        <AppStack.Screen
                            name="RecipesInProgress"
                            component={RecipesInProgress}
                            options={{
                                title: "Projetos em Andamento",
                                headerStyle: {
                                    backgroundColor: "#64CCC5",
                                    shadowOpacity: 0,
                                    elevation: 0,
                                },
                                headerTitleStyle: { color: "white" },
                            }}
                        />
                        <AppStack.Screen
                            name="CadastroMaterial"
                            component={CadastroMaterial}
                            options={{title: "Cadastrar Receita"}}
                        />
                        <AppStack.Screen
                            name="MenuFlutuante"
                            component={FloatingMenu}
                        />
                    </AppStack.Navigator>
                </View>
                <View style={styles.FloatingMenu}>
                    <FloatingMenu/> {FloatingMenu}
                </View>
            </View>

        </NavigationContainer>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerNavigator: {
        flex: 1,

    },
    FloatingMenu: {
        alignSelf: "flex-end"
    },
});
export default App;

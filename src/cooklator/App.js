import React from "react";
import {StyleSheet, View} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import CadastroMaterial from "./components/CadastroMaterial";
import CreateRecipe from "./components/CreateRecipe";
import FloatingMenu from "./components/FloatingMenu";
import RecipesInProgress from "./pages/ReceipesInProgress";
import CardRecipe from "./components/CardRecipe";
import {PaperProvider} from "react-native-paper";
import Recipes from "./pages/Recipes";
import OptionsTabs from "./components/OptionTabs";

const AppStack = createStackNavigator();

const App = () => {
    return (
        <PaperProvider>
            <NavigationContainer>
                <View style={styles.container}>

                    <View style={styles.containerNavigator}>
                        <AppStack.Navigator initialRouteName="Recipes">
                            <AppStack.Screen name="Receitas" component={Recipes}/>
                            <AppStack.Screen
                                name="CadastrarReceita"
                                component={CreateRecipe}
                                options={{
                                    title: "Cadastrar Receita",
                                    headerStyle: {
                                        backgroundColor: "#64CCC5",
                                        shadowOpacity: 0,
                                        elevation: 0,
                                    },
                                    headerTitleStyle: {color: "white"},
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
                                    headerTitleStyle: {color: "white"},
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
                            <AppStack.Screen name="CardRecipe" component={CardRecipe}/>
                            <AppStack.Screen name="OptionsTabs" component={OptionsTabs} options={{title: "Continuar Receita"}}/>
                        </AppStack.Navigator>
                    </View>
                    <View style={styles.FloatingMenu}>
                        <FloatingMenu/> {FloatingMenu}
                    </View>
                </View>

            </NavigationContainer>
        </PaperProvider>
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

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
import Profile from "./components/Profile";
import LogoCooklator from "./components/LogoCooklator";

const AppStack = createStackNavigator();

const App = () => {
    return (
        <PaperProvider>
            <NavigationContainer>
                <View style={styles.container}>

                    <View style={styles.containerNavigator}>
                        <AppStack.Navigator initialRouteName="Recipes">
                            <AppStack.Screen name="Receitas" component={Recipes}
                                             options={{
                                                 headerStyle: {
                                                     backgroundColor: "#DAFFFB",
                                                     shadowOpacity: 0,
                                                     elevation: 0,
                                                 },
                                                 headerTitleStyle: {
                                                     color: "#04364A",
                                                     fontSize: 24,
                                                 },
                                             }}
                            />
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
                                    },
                                    headerRight: () => (
                                        <View style={styles.headerRight}>
                                            <LogoCooklator width={100} height={30} isWithSubtitle={false} />
                                        </View>
                                    ),
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
                                    headerRight: () => (
                                        <View style={styles.headerRight}>
                                            <LogoCooklator width={100} height={30} isWithSubtitle={false} />
                                        </View>
                                    ),
                                }}
                            />
                            <AppStack.Screen
                                name="CadastroMaterial"
                                component={CadastroMaterial}
                                options={{
                                    title: "Cadastrar Receita",
                                    headerStyle: {
                                        backgroundColor: "#176B87",
                                        shadowOpacity: 0,
                                        elevation: 0,
                                    },
                                    headerTitleStyle: {color: "white"},
                                }}
                            />
                            <AppStack.Screen
                                name="MenuFlutuante"
                                component={FloatingMenu}
                            />
                            <AppStack.Screen name="CardRecipe" component={CardRecipe}/>
                            <AppStack.Screen
                                name="OptionsTabs"
                                component={OptionsTabs}
                                options={{
                                    title: "Continuar Receita",
                                    headerStyle: {
                                        backgroundColor: "#176B87",
                                        shadowOpacity: 0,
                                        elevation: 0,
                                    },
                                    headerTitleStyle: {color: "white"},
                                }}/>
                            <AppStack.Screen
                                name="Profile"
                                component={Profile}
                                options={{
                                    title: "Perfil",
                                    headerStyle: {
                                        backgroundColor: "#176B87",
                                        shadowOpacity: 0,
                                        elevation: 0,
                                    },
                                    headerTitleStyle: {color: "white"},
                                }}
                            />
                        </AppStack.Navigator>
                    </View>
                    <View style={styles.floatingMenu}>
                        <FloatingMenu/>
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
    floatingMenu: {
        alignSelf: "flex-end"
    },
    headerRight: {
        marginRight: 15
    }
});
export default App;

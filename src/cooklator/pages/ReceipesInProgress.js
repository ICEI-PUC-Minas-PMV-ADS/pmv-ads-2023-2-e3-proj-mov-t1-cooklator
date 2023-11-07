import CardRecipe from "../components/CardRecipe";
import React, { useState, useEffect } from 'react';
import {ScrollView, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import config from "../config";
import { useNavigation } from '@react-navigation/native';
import {TouchableRipple} from "react-native-paper";

const RecipesInProgress = () => {
    const [recipes, setRecipes] = useState([]);
    const recipeApiUrl = config.recipeApiUrl;
    const navigation = useNavigation();

    const handleCardPress = () => {
        // navigation.navigate('OptionsTabs', { recipeId });
        navigation.navigate('OptionsTabs');
    };

    useEffect(() => {
        fetch(recipeApiUrl)
            .then((response) => response.json())
            .then((data) => setRecipes(data))
            .catch((error) => console.error('Erro ao buscar as receitas:', error));
    }, []);

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {recipes.map((recipe) => (
                <TouchableRipple onPress={handleCardPress}>
                <CardRecipe
                    key={recipe.id}
                    recipeName={recipe.nome}
                    recipeColor={recipe.cor}
                    recipeId={recipe.id}
                    setRecipes={setRecipes}
                />
                </TouchableRipple>
            ))}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
});

export default RecipesInProgress;
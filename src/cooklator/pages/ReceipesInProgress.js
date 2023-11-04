import CardRecipe from "../components/CardRecipe";
import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import config from "../config";

const RecipesInProgress = () => {
    const [recipes, setRecipes] = useState([]);
    const recipeApiUrl = config.recipeApiUrl;

    useEffect(() => {
        fetch(recipeApiUrl)
            .then((response) => response.json())
            .then((data) => setRecipes(data))
            .catch((error) => console.error('Erro ao buscar as receitas:', error));
    }, []);

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {recipes.map((recipe) => (
                <CardRecipe
                    key={recipe.id}
                    recipeName={recipe.nome}
                    recipeColor={recipe.cor}
                    recipeId={recipe.id}
                    setRecipes={setRecipes}
                />
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
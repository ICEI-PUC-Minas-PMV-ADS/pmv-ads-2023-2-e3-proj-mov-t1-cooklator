import CardRecipe from "../components/CardRecipe";
import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet } from 'react-native';

const RecipesInProgress = () => {
    const [recipes, setRecipes] = useState([]);
    const recipeApiUrl = 'http://localhost:3000/recipe';

    useEffect(() => {
        fetch(recipeApiUrl)
            .then((response) => response.json())
            .then((data) => setRecipes(data))
            .catch((error) => console.error('Erro ao buscar as receitas:', error));
    }, []);

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {recipes.map((recipe) => (
                <CardRecipe key={recipe.id} recipeName={recipe.nome} recipeColor={recipe.cor} />
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
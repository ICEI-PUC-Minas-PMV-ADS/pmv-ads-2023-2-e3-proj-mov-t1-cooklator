import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { TouchableRipple } from 'react-native-paper';
import CardRecipe from '../components/CardRecipe';
import config from '../config';
import {useNavigation} from "@react-navigation/native";

const RecipesList = ({ isConcluded, hideOptions }) => {
    const [recipes, setRecipes] = useState([]);
    const [filteredRecipes, setFilteredRecipes] = useState([]);
    const recipeApiUrl = config.recipeApiUrl;
    const navigation = useNavigation();

    const handleCardPress = (recipeId) => {
        // navigation.navigate('OptionsTabs', { recipeId });
        navigation.navigate('OptionsTabs');
    };

    useEffect(() => {
        fetch(recipeApiUrl)
            .then((response) => response.json())
            .then((data) => setRecipes(data))
            .catch((error) => console.error('Erro ao buscar as receitas:', error));
    }, []);

    useEffect(() => {
        const filtered = recipes.filter((recipe) => recipe.isConcluded === isConcluded);
        setFilteredRecipes(filtered);
    }, [recipes, isConcluded]);

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {filteredRecipes.map((recipe) => (
                <TouchableRipple key={recipe.id} onPress={() => handleCardPress(recipe.id)}>
                    <CardRecipe
                        key={recipe.id}
                        recipeName={recipe.name}
                        recipeColor={recipe.color}
                        recipeId={recipe.id}
                        setRecipes={setRecipes}
                        hideOptions={hideOptions}
                    />
                </TouchableRipple>
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
});

export default RecipesList;

import React from 'react';
import RecipesList from "../components/RecipesList";

const RecipesInProgress = () => {
    return <RecipesList isConcluded={false} hideOptions={false}/>;
};

export default RecipesInProgress;
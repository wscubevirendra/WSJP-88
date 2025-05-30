const getRecipes = async () => {
    const response = await fetch("https://dummyjson.com/recipes");
    const data = await response.json();
    return data.recipes
}

const getRecipesById = async (id) => {
    const response = await fetch("https://dummyjson.com/recipes/" + id);
    const data = await response.json();
    return data
}



export { getRecipes, getRecipesById }
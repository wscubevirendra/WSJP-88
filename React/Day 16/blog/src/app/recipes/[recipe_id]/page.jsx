import { getRecipesById } from '@/library/api-call';
import React from 'react';
import { FaClock, FaUtensils, FaFireAlt, FaStar } from 'react-icons/fa';

const page = async ({ params }) => {
    const recipe = await getRecipesById(params.recipe_id)

    return (
        <div className="max-w-4xl mx-auto p-4 bg-white rounded-2xl shadow-md mt-6">
            <img src={recipe.image} alt={recipe.name} className="w-full h-64 object-cover rounded-xl" />
            <h1 className="text-3xl font-bold mt-4 text-gray-800">{recipe.name}</h1>
            <p className="text-sm text-gray-500 mt-1">{recipe.cuisine} | {recipe.difficulty}</p>

            <div className="flex gap-4 text-gray-600 mt-4 flex-wrap">
                <div className="flex items-center gap-2"><FaClock /> Prep: {recipe.prepTimeMinutes} mins</div>
                <div className="flex items-center gap-2"><FaFireAlt /> Cook: {recipe.cookTimeMinutes} mins</div>
                <div className="flex items-center gap-2"><FaUtensils /> Serves: {recipe.servings}</div>
                <div className="flex items-center gap-2"><FaStar className="text-yellow-500" /> {recipe.rating} ({recipe.reviewCount} reviews)</div>
            </div>

            <div className="mt-6">
                <h2 className="text-2xl font-semibold text-gray-700">Ingredients</h2>
                <ul className="list-disc list-inside mt-2 text-gray-700">
                    {recipe.ingredients.map((item, idx) => (
                        <li key={idx}>{item}</li>
                    ))}
                </ul>
            </div>

            <div className="mt-6">
                <h2 className="text-2xl font-semibold text-gray-700">Instructions</h2>
                <ol className="list-decimal list-inside mt-2 text-gray-700 space-y-1">
                    {recipe.instructions.map((step, idx) => (
                        <li key={idx}>{step}</li>
                    ))}
                </ol>
            </div>

            <div className="mt-6 text-gray-600 text-sm">
                <p><strong>Calories per serving:</strong> {recipe.caloriesPerServing}</p>
                <p><strong>Meal Type:</strong> {recipe.mealType.join(', ')}</p>
                <p><strong>Tags:</strong> {recipe.tags.join(', ')}</p>
            </div>
        </div>
    );
};

export default page;

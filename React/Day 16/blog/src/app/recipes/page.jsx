import Card from '@/components/Card';
import { getRecipes } from '@/library/api-call'
import React from 'react'

export default async function RecipesPage() {
    const recipes = await getRecipes();
    return (
        <Card items={recipes} />
    )
}

import React from 'react';
import Image from 'next/image';
import { getRecipes } from '@/library/api-call';
import Card from '@/components/Card';

export default async function Home() {
  const recipes = await getRecipes();
  const trending = recipes.slice(0, 4);
  const topSelling = recipes.slice(4, 8);
  const dealOfDay = recipes.slice(8, 12);



  return (
    <div className="space-y-8">
      <Image src="https://dummyjson.com/image/1200x400" width={1200} height={400} className="!w-full h-[400px]" alt="Banner" />

      <section>
        <h1 className="text-2xl font-bold mb-4">Top Trending</h1>
        <Card items={trending} />
      </section>

      <section>
        <h1 className="text-2xl font-bold mb-4">Top Selling</h1>
        <Card items={topSelling} />

      </section>

      <section>
        <h1 className="text-2xl font-bold mb-4">Deal of the Day</h1>
        <Card items={dealOfDay} />

      </section>
    </div>
  );
}

import React from 'react';
import Image from 'next/image';
import { getRecipes } from '@/library/api-call';
import Card from '@/components/Card';
import Slider from '@/components/Slider';

export default async function Home() {
  const recipes = await getRecipes();
  const trending = recipes.slice(0, 4);
  const topSelling = recipes.slice(4, 8);
  const dealOfDay = recipes.slice(8, 12);
  const slide = recipes.slice(12, 20);



  return (
    <div className="space-y-8">

      <section className="relative w-full overflow-hidden bg-white rounded-xl shadow-md p-4">
        <div className=" grid grid-cols-2">
          {/* Text Content */}
          <div className=" p-4">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Recipe Section</h1>
            <p className="text-gray-600 text-sm">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam velit commodi mollitia autem?
              Officiis, excepturi aspernatur molestias tempora deserunt aliquid hic saepe nostrum. Voluptatum nulla
              reprehenderit atque quibusdam? Mollitia, sapiente.
            </p>
          </div>
          <Slider data={slide} />

          {/* Image (Simulating Slide) */}

        </div>

      </section>


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

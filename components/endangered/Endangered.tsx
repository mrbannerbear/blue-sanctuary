"use client";
import { useState } from "react";
import data from "../../utils/populationData";
import Link from "next/link";
import Image from "next/image";

const PopulationSlider = () => {
  const yearRange = data[0].population.map((each) => each.year);

  const [sliderValue, setSliderValue] = useState(0);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderValue(parseFloat(e.target.value));
  };

  const interpolatedYearIndex = Math.floor(
    (sliderValue / 100) * (yearRange.length - 1)
  );
  const currentYear = yearRange[interpolatedYearIndex];
  const yearRelatedData = data.map((each) => {
    return {
      species: each.species,
      link: each.link,
      population: each.population.filter((obj) => obj.year === currentYear),
    };
  });

  return (
    <section className="bg-gradient-to-b text-white px-6 md:px-20 py-16">
      <h2 className="text-3xl mb-12 text-center">
        Explore Marine Life Population
      </h2>

      <div className="flex flex-col md:flex-row justify-center items-center gap-10">
        <div className="w-1/3">
          <div className="grid grid-cols-2 font-sans gap-4">
            {yearRelatedData.map((each, i) => (
              <div key={i}>
                <p>
                  <Link
                    target="_blank"
                    className="hover:text-blue-900 text-lg"
                    href={each.link}
                  >
                    {each.species}
                  </Link>
                  <br />
                  <span className="text-2xl font-semibold">
                    {each.population[0].count}
                  </span>
                </p>
              </div>
            ))}
          </div>

          <div className="relative w-full flex gap-5 items-center mt-12">
            <div className="text-center text-sm border-blue-900 border-[1.5px] font-sans text-white px-3 py-1 rounded-lg">
              {currentYear}
            </div>
            <input
              type="range"
              min="0"
              max="100"
              step="0.1"
              defaultValue="0"
              className="appearance-auto w-3/4 bg-gray-200 h-2 rounded-lg accent-blue-950/70"
              onInput={handleInput}
            />
          </div>
        </div>

        <div className="w-1/3">
          <Image
          className="w-full h-full"
            src={
              "https://images.unsplash.com/photo-1712672122149-038926f84bb1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            height={500}
            width={500}
            alt="Turtle"
          />
        </div>
      </div>
    </section>
  );
};

export default PopulationSlider;

import React from "react";
import { BASE_DATA } from "../App";

const Card = ({ foods }) => {
  return (
    <div className="flex flex-wrap gap-2 pt-9 px-6 justify-center">
      {foods.map((food) => (
        <div key={food.name} className="border border-1 border-amber-50 rounded-2xl backdrop-blur-lg text-white flex w-85 h-42 m-3 p-4">
          <div>
            <img className="w-70" src={BASE_DATA + food.image} alt={food.name} />
          </div>
          <div>
            <h1 className="text-lg">{food.name}</h1>
            <p className="text-sm">{food.text}</p>
            <button className="bg-red-500 rounded-lg text-sm font-medium float-end p-1 mt-4">
              ${food.price.toFixed(2)}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;

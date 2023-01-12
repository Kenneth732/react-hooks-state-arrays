import React, { useState } from "react";
import { spicyFoods, getNewRandomSpicyFood } from "../data";


export default function SpicyFoodList() {
    const [foods, setFoods] = useState(spicyFoods);

    function handleAddFood() {
        const newFood = getNewRandomSpicyFood();
        console.log(newFood);
    }
    const foodList = foods.map((food) => (
        <li key={food.id}>
            {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
        </li>
    ));
    function handleLiClick(id) {
        const newFoodArray = foods.map((food) => {
            if (food.id === id) {
                return {
                    ...food,
                    heatLevel: food.heatLevel + 1,
                };
            } else {
                return food;
            }
        });
        setFoods(newFoodArray);
    }
    return (
        <div>
            <button onClick={handleAddFood}>Add New Food</button>
            <ul>{foodList}</ul>
        </div>
    );
};

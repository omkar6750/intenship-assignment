import React from 'react';

export default function GroceryList() {
  const items = [
    'Apples', 'Bananas', 'Oranges', 'Grapes', 'Strawberries',
    'Blueberries', 'Raspberries', 'Pineapple', 'Mango', 'Avocado',
    'Tomatoes', 'Cucumbers', 'Carrots', 'Broccoli', 'Spinach',
    'Lettuce', 'Onions', 'Garlic', 'Potatoes', 'Sweet Potatoes',
    'Bell Peppers', 'Zucchini', 'Eggplant', 'Cauliflower', 'Mushrooms',
    'Chicken Breast', 'Ground Beef', 'Pork Chops', 'Salmon', 'Tilapia',
    'Eggs', 'Milk', 'Butter', 'Cheddar Cheese', 'Yogurt',
    'Almonds', 'Cashews', 'Peanut Butter', 'Oats', 'Rice',
    'Pasta', 'Bread', 'Tortillas', 'Olive Oil', 'Coconut Oil',
    'Flour', 'Sugar', 'Salt', 'Pepper', 'Cereal'
  ];

  return (
    <div className="h-screen ">
      <ul className="list-disc p-4">
        {items.map((item, index) => (
          <li key={index} className="py-2">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

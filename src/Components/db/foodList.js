const cuisineList = [
  { id: "1", name: "Tunisian" },
  { id: "2", name: "Algerian" },
  { id: "3", name: "Bahraini" },
  { id: "4", name: "Mediterranean" },
  { id: "5", name: "Lebanese" },
  { id: "6", name: "Omani" },
  { id: "7", name: "Emirati" },
  { id: "8", name: "Qatari" },
  { id: "9", name: "Turkish" },
  { id: "10", name: "French" },
  { id: "11", name: "Chinese" },
  { id: "12", name: "Punjabi" },
  { id: "13", name: "Pashtun" },
  { id: "14", name: "Persian" },
  { id: "15", name: "Sindhi" },
  { id: "16", name: "Balochi" },
  { id: "17", name: "Kashmiri" },
  { id: "18", name: "Italian" },
  { id: "19", name: "Greek" }
];

const famousDishes = [
  { id: "1", name: "Fried Shrimp" },
  { id: "2", name: "Frid Rice" },
  { id: "3", name: "Kung Pao Chicken" },
  { id: "4", name: "Spring Roll" },
  { id: "5", name: "Dumpling" },
  { id: "6", name: "Chow Mein" },
  { id: "7", name: "Sushi" },
  { id: "8", name: "Udon" },
  { id: "9", name: "Onigiri" },
  { id: "10", name: "Soba" },
  { id: "11", name: "Ramen" },
  { id: "12", name: "Tempura" },
  { id: "13", name: "Okonomiyaki" }
];

let ingredientsList = [
  { id: "1", name: "Asparagus" },
  { id: "2", name: "Spinach" },
  { id: "3", name: "Okra" },
  { id: "4", name: "Potato" },
  { id: "5", name: "Gourd" },
  { id: "6", name: "Artichoke" },
  { id: "7", name: "Beef" },
  { id: "8", name: "Fish" },
  { id: "9", name: "Chick Peas" },
  { id: "10", name: "Lamb" },
  { id: "11", name: "White Lentils" },
  { id: "12", name: "Red Beans" }
];

let mealsList = [
  { id: "1", name: "Breakfast" },
  { id: "2", name: "Brunch" },
  { id: "3", name: "Lunch" },
  { id: "4", name: "Tea" },
  { id: "5", name: "Dinner" }
];

const dietaryRestrictions = [
  { id: "1", name: "Halal" },
  { id: "8741ca7eeb7e1fbjhd421415", name: "Gluten Free" },
  { id: "6741ca7eeb7e1fbtgd421415", name: "Kosher Friendly" },
  { id: "9841ca7eeb7e1fbujd421415", name: "GMO Free" },
  { id: "6741ca7eeb7e1fbold421415", name: "Low Carbs" },
  { id: "1641ca7eeb7e1fbbgd421415", name: "Sugar Free" },
  { id: "1241ca7eeb7e1fbefd421415", name: "Organic" }
];

export function getIngredientsList() {
  return ingredientsList.filter(list => list);
}

export function getFamousDishes() {
  return famousDishes.filter(list => list);
}

export function getMealsList() {
  return mealsList.filter(list => list);
}

export function getDietaryRestrictions() {
  return dietaryRestrictions.filter(list => list);
}

export function getCuisineList() {
  return cuisineList.filter(list => list);
}

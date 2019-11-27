let ingridentiantsList = [
  { id: "1b21ca3eeb7f6fbccd471811", name: "Fish" },
  { id: "1b21ca3eeb7f6fbccd471812" },
  { id: "1b21ca3eeb7f6fbccd471813", name: "Chicken" },
  { id: "1b21ca3eeb7f6fbccd471814", name: "Goat" },
  { id: "1m21ca3eeb7f6fbccd471815", name: "Beef" },
  { id: "5b21ca3eeb7f6fbccd471816", name: "Daal Mash" },
  { id: "6y21ca3eeb7f6fbccd471817", name: "Daal Lobia" },
  { id: "9b21ca3eeb7f6fbccd471818", name: "Daal Chana" },
  { id: "21b21ca3eeb7f6fbccd471819", name: "Channay" },
  { id: "8v21ca3eeb7f6fbccd471815", name: "Black Channay" },
  { id: "3n21ca3eeb7f6fbccd471815", name: "Baingan" },
  { id: "8b21ca3eeb7f6fbccd471815", name: "Palak" },
  { id: "6b21ca3eeb7f6fbccd471815", name: "Karela" },
  { id: "1z21ca3eeb7f6fbccd471815", name: "Bhindi" }
];

let foodType = [
  { id: "1v51ca3eeb7f6fbccd471815", name: "vegetables" },
  { id: "1v51ca3eeb7f6fbccd471815", name: "lentiles" },
  { id: "1v51ca3eeb7f6fbccd471815", name: "meat" },
  { id: "1v51ca3eeb7f6fbccd471815", name: "dairy" }
];

export function getFoodType() {
  return foodType.filter(list => list);
}

export function getIngridentiantsList() {
  return ingridentiantsList.filter(list => list);
}

export function getMeat() {
  return foodType.filter(food => food.name === "meat");
}

export function getVegatables() {
  return foodType.filter(food => food.name === "vegetables");
}

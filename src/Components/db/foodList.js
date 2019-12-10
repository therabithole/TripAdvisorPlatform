let ingridentiantsList = [
  { id: "2551ca3eeb7l9fbccd421415", name: "Fish" },
  { id: "7551ca3eeb73242vdfg45t43" },
  { id: "5251ca3eeb7bfghty54y65h4", name: "Chicken" },
  { id: "4151ca3eeb787i86jg43t4vg", name: "Goat" },
  { id: "6Y51ca3eeb7gy65u65yuvbgl", name: "Beef" },
  { id: "9O51ca3eeb75th76uhfg5t56", name: "Daal Mash" },
  { id: "SD51ca3eeb776jj87o87jhiu", name: "Daal Lobia" },
  { id: "5651ca3eeb7h5fnhk;421415", name: "Daal Chana" },
  { id: "2551ca3gh37v4f5u8k421415", name: "Channay" },
  { id: "2551ca4g537b6fbccd421415", name: "Black Channay" },
  { id: "2551ca3gh57n7fbccd421415", name: "Baingan" },
  { id: "2551ca8jy57c2fbccd421415", name: "Palak" },
  { id: "2551ca4j857z1fbccd421415", name: "Karela" },
  { id: "2551cag5gs7b7fbccd421415", name: "Bhindi" }
];

let foodType = [
  { id: "2551cag5gs7f6fbccd421416", name: "vegetables" },
  { id: "1561cag5gs7f6fbccd421415", name: "lentiles" },
  { id: "87551cag5gs7f6fbccd421415", name: "meat" },
  { id: "1ft1cag5gs7f6fbccd421415", name: "dairy" }
];

let famousFoods = [
  { id: "1451cag5gb7f6fbccd421416", name: "Street Food" },
  { id: "2561cag5gs7b7fbccd421415", name: "Peri Peri" },
  { id: "87551cag5gs7f6fbhcd421415", name: "Pasta" },
  { id: "2ct1cag5ls7f6fbccd421415", name: "Noodles" },
  { id: "4ut1cag5ls7f6fbccd421415", name: "Kids Menu" },
  { id: "9tt1cag5ls7f6fbccd421415", name: "Juices" },
  { id: "3vt1cag5ls7f6fbccd421415", name: "Kababs" },
  { id: "5kt1cag5ls7h7fbccd421415", name: "Fish and Chips" },
  { id: "7gt1cag5ls7j8fbccd421415", name: "Fast Food" }
];
export function getFoodType() {
  return foodType.filter(list => list);
}

export function getFamousFoods() {
  return famousFoods.filter(list => list);
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

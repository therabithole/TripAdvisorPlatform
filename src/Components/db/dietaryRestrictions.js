const dietaryRestrictions = [
  {
    id: "3441ca7eeb7e1fbcvd421415",
    name: "Halal"
  },
  {
    id: "8741ca7eeb7e1fbjhd421415",
    name: "Gluten Free"
  },
  {
    id: "6741ca7eeb7e1fbtgd421415",
    name: "Kosher Friendly"
  },
  {
    id: "9841ca7eeb7e1fbujd421415",
    name: "GMO Free"
  },
  {
    id: "6741ca7eeb7e1fbold421415",
    name: "Low Carbs"
  },
  {
    id: "1641ca7eeb7e1fbbgd421415",
    name: "Sugar Free"
  },
  {
    id: "1241ca7eeb7e1fbefd421415",
    name: "Organic"
  }
];

export function getDietaryRestrictions() {
  return dietaryRestrictions.filter(list => list);
}

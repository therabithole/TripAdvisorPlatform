const cuisineList = [
  {
    _id: "1e58ja3kty8f6fbccd471811",
    name: "German"
  },
  {
    _id: "2e58ja3kty8f6fbccd471811",
    name: "French"
  },
  {
    _id: "3e58ja3kty8f6fbccd471811",
    name: "Chinese"
  },
  {
    _id: "4e58ja3kty8f6fbccd471811",
    name: "Punjabi"
  },
  {
    _id: "5e58ja3kty8f6fbccd471811",
    name: "Pashtun"
  },
  {
    _id: "6e58ja3kty8f6fbccd471811",
    name: "Persian"
  },
  {
    _id: "7e58ja3kty8f6fbccd471811",
    name: "Sindhi"
  },
  {
    _id: "8e58ja3kty8f6fbccd471811",
    name: "Balochi"
  },
  {
    _id: "9e58ja3kty8f6fbccd471811",
    _name: "Kashmiri"
  },
  {
    _id: "1b58ja3kty8f6fbccd471811",
    name: "Italian"
  },
  {
    _id: "1f58ja3kty8f6fbccd471811",
    name: "Spainish"
  }
];

export function getCuisineList() {
  return cuisineList.filter(list => list);
}

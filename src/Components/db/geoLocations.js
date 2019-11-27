export const locations = [
  { _id: "7v21ca3eeb7f6fbccd473456", city: "Lahore", province: "Punjab" },
  { _id: "7v41ca3eeb7f6fbccd122345", city: "Karachi", province: "Sindh" },
  { _id: "7v41ca3eeb7f6fbccd122345", city: "Hyderabad", province: "Sindh" },
  { _id: "7v41ca3eeb7f6fbccd122345", city: "Quetta", province: "Balochistan" },
  {
    _id: "7v11ca3eeb7f6fbccd423911",
    city: "Islamabad",
    province: "FederalCapital"
  },
  { _id: "7v51ca3eeb7f6fbccd413456", city: "Rawalpindi", province: "Punjab" },
  { _id: "7v71ca3eeb7f6fbccd471378", city: "Faisalabad", province: "Punjab" },
  { _id: "7v81ca3eeb7f6fbccd479876", city: "Multan", province: "Punjab" },
  {
    _id: "7v81ca3eeb7f6fbccd479876",
    city: "Hazara",
    province: "KhyberPakhtunkhawa"
  }
];

export function getAllLocations() {
  return locations.filter(allLocations => allLocations);
}

export function getPunjabCities() {
  return locations.filter(locations => locations.province === "Punjab");
}

export function getKhyberPakhtunkhawaCities() {
  return locations.filter(
    locations => locations.province === "KhyberPakhtunkhawa"
  );
}

export function getBalochistanCities() {
  return locations.filter(locations => locations.province === "Balochistan");
}

export function getSindhCities() {
  return locations.filter(locations => locations.province === "Balochistan");
}

export function getProvinces() {
  return locations.find(
    locations =>
      locations.province === "Balochistan" &&
      "Sindh" &&
      "Punjab" &&
      "KhyberPakhtunkhawa"
  );
}

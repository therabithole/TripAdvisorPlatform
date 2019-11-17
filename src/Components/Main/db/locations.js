export const locations = [
  { _id: "7v21ca3eeb7f6fbccd473456", locationName: "Lahore" },
  { _id: "7v41ca3eeb7f6fbccd122345", locationName: "Karachi" },
  { _id: "7v11ca3eeb7f6fbccd423911", locationName: "Islamabad" },
  { _id: "7v51ca3eeb7f6fbccd413456", locationName: "Rawalpindi" },
  { _id: "7v71ca3eeb7f6fbccd471378", locationName: "Faisalabad" },
  { _id: "7v81ca3eeb7f6fbccd479876", locationName: "Multan" }
];

export function getLocations() {
  return locations.filter(countryLocations => countryLocations);
}

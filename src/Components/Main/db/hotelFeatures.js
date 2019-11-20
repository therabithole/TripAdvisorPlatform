export const hotelFeatures = [
  { _id: "5g21ca3eeb7f6fbccd473456", name: "Free Parking" },
  { _id: "5g41ca3eeb7f6fbccd122345", name: "Free Breakfast" },
  { _id: "5g11ca3eeb7f6fbccd423911", name: "Room Service" },
  { _id: "5g51ca3eeb7f6fbccd413456", name: "Internet" },
  { _id: "5g71ca3eeb7f6fbccd471378", name: "Restaurant" },
  { _id: "8n71ca3eeb7f6fbccd471378", name: "Good Breakfast" },
  { _id: "5g81ca3eeb7f6fbccd479876", name: "Pool" },
  { _id: "5g21ca3eeb7f6fbccd563333", name: "Spa" },

  { _id: "5g21ca3eeb7f6fbccd546546", name: "Airport Shuttle" },

  { _id: "5g21ca3eeb7f6fbccd135789", name: "Meeting Rooms" },

  {
    _id: "5g21ca3eeb7f6fbccd112314",
    name: "Airport Transportation"
  },
  {
    _id: "5g21ca3eeb7f6fbccd086431",
    name: "Business Centre with Internet Access"
  },
  {
    _id: "5g21ca3eeb7f6fbccd023547",
    name: "Fitness Centre with Gym / Workout Room"
  },
  {
    _id: "8v21ca3eeb7f6fbccd023547",
    name: "Facilities for disabled guests"
  }
];

export function getHotelFeatures() {
  return hotelFeatures.filter(propFeatures => propFeatures);
}

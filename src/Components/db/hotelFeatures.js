export const hotelFeatures = [
  { _id: "h1", name: "Free Parking" },
  { _id: "h2", name: "Free Breakfast" },
  { _id: "h3", name: "Room Service" },
  { _id: "h4", name: "Internet" },
  { _id: "h5", name: "Restaurant" },
  { _id: "h6", name: "Good Breakfast" },
  { _id: "h7", name: "Pool" },
  { _id: "h8", name: "Spa" },

  { _id: "h9", name: "Airport Shuttle" },

  { _id: "h10", name: "Meeting Rooms" },

  {
    _id: "h11",
    name: "Airport Transportation"
  },
  {
    _id: "h12",
    name: "Business Centre with Internet Access"
  },
  {
    _id: "h13",
    name: "Fitness Centre with Gym / Workout Room"
  },
  {
    _id: "h14",
    name: "Facilities for disabled guests"
  }
];

export function getHotelFeatures() {
  return hotelFeatures.filter(propFeatures => propFeatures);
}

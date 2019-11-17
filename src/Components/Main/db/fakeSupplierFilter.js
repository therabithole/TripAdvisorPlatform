export const hotelFilterProperties = [
  {
    hotelFacilities: [
      {
        _id: "8b21ca3eeb7f6fbccd466666",
        hotelFacility: "Breakfast Included"
      },
      { _id: "1l21ca3eeb7f6fbccd455555", hotelFacility: "Free Internet" },
      { _id: "3hz21ca3eeb7f6fbccd45555", hotelFacility: "Free parking" },
      { _id: "8c21ca3eeb7f6fbccd455555", hotelFacility: "Swimming Pool" },
      { _id: "1j21ca3eeb7f6fbccd455555", hotelFacility: "TV Lounge" },
      {
        _id: "2x21ca3eeb7f6fbccd455555",
        hotelFacility: "Airport Transportation"
      },
      {
        _id: "4h21ca3eeb7f6fbccd455555",
        hotelFacility: "Fitness Centre with Gym / Workout Room"
      }
    ]
  },
  {
    roomFeatures: [
      {
        _id: "5z21ca3eeb7f6fbccd471777",
        roomFeature: "Non-Smoking Rooms"
      },
      { _id: "5z21ca3eeb7f6fbccd471777", roomFeature: "Family Rooms" },
      { _id: "5z21ca3eeb7f6fbccd471777", roomFeature: "Air Conditioning" },
      { _id: "5z21ca3eeb7f6fbccd471777", roomFeature: "Free WiFi" },
      { _id: "5z21ca3eeb7f6fbccd471777", roomFeature: "Free WiFi" },
      { _id: "5z21ca3eeb7f6fbccd471777", roomFeature: "Free WiFi" }
    ]
  }
];

export function getHotelFeatures() {
  const getHotelFeatures = hotelFilterProperties[0].hotelFacilities;
  const hotelFeatures = getHotelFeatures.filter(st => st);
  return hotelFeatures;
}

export function getRoomFeatures() {
  const getRoomFeatures = hotelFilterProperties[1].roomFeatures;
  const roomFeatures = getRoomFeatures.filter(st => st);
  return roomFeatures;
}

/* export default function getAllHotelFilter() {
  const getHotelFeatures = hotelFilterProperties[0].hotelFacilities;
  

  const getRoomFeatures = hotelFilterProperties[1].roomFeatures;
  const roomFeatures = getRoomFeatures.filter(st => st);

  const allFilters = {
    roomFeatures: roomFeatures,
    hotelFeatures: hotelFeatures
  };

  return allFilters;
} */

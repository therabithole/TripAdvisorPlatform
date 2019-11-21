export const roomFeatures = [
  { _id: "4a21ca3eeb7f6fbccd473456", name: "Free WiFi" },
  { _id: "4a41ca3eeb7f6fbccd122345", name: "Family Rooms" },
  { _id: "4a11ca3eeb7f6fbccd423911", name: "Dining Area" },
  { _id: "4a51ca3eeb7f6fbccd413456", name: "Air Conditioning" },
  { _id: "4a71ca3eeb7f6fbccd471378", name: "Laptop safe" },
  { _id: "1a21ca3eeb7f6fbccd471378", name: "Walk-in Shower" }
];

export function getRoomFeatures() {
  return roomFeatures.filter(roomType => roomType);
}

export const roomFeatures = [
  { _id: "r1", name: "Free WiFi" },
  { _id: "r2", name: "Family Rooms" },
  { _id: "r3", name: "Dining Area" },
  { _id: "r4", name: "Air Conditioning" },
  { _id: "r5", name: "Laptop safe" },
  { _id: "r6", name: "Walk-in Shower" }
];

export function getRoomFeatures() {
  return roomFeatures.filter(roomType => roomType);
}

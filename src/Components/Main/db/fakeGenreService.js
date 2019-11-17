export const genres = [
  { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
  { _id: "4b21aa3eeb7f6fbccd471814", name: "Comedy" },
  { _id: "7b21ma3eeb7f6fbccd471820", name: "Thriller" },
  { _id: "1b21za3eeb7f6fbccd471820", name: "Free Breakfast" },
  { _id: "5b21ya3eeb7f6fbccd471820", name: "Free Internet" },
  { _id: "9b21fa3eeb7f6fbccd471820", name: "TV Lounge" }
];

export function getGenres() {
  return genres.filter(g => g);
}

export const dataFilterOrderBar = {
  bubble_Order: {
    bubbleItems: [
      {
        title: "Alphabetically",
        keys: ["A-Z", "Z-A"],
        method: "alphabeticallyStatusBubble",
      },
      {
        title: "Release date",
        keys: ["Newest", "Oldest"],
        method: "releaseDateStatusBubble",
      },

      {
        title: "Rating",
        keys: ["Highest", "Lowest"],
        method: "ratingStatusBubble",
      },
    ],
  },
  bubble_Filter: {
    bubbleItems: [
      { title: "Genres", method: "allGenres", key: "genresStatusBubble" },
      {
        title: "Platforms",
        method: "allPlatforms",
        key: "platformsStatusBubble",
      },
      { title: "Stores", method: "allStores", key: "storesStatusBubble" },
      { title: "Created in DB", method: false, key: "createdStatusBubble" },
    ],
  },
};

const inicialState = {
  allGames: [],
  allGenres: [],
  allPlatforms: [],
  allStores: [],
  filteredGames: [],
  orderedGames: [],
  gameDetails: {},
  sideBar: false,
  searchBar: false,
  bubbleOrder: false,
  bubbleFilter: false,
  genresStatusBubble: false,
  platformsStatusBubble: false,
  storesStatusBubble: false,
  createdStatusBubble: false,
  alphabeticallyStatusBubble: false,
  releaseDateStatusBubble: false,
  ratingStatusBubble: false,
  filteredGamesStatus: false,
  orderedGamesStatus: false,
  filterInSearch: false,
};

export default function rootReducer(state = inicialState, action) {
  const reducers = {
    SV: {
      // SEARCH VIDEOGAMES
      ...state,
      filteredGames: action.payload,
      filteredGamesStatus: true,
      filterInSearch: true,
    },

    GD: {
      // GET DETAILS
      ...state,
      gameDetails: action.payload,
    },
    GGDBA: {
      // GET GAMES DATABASE & API
      ...state,
      allGames: action.payload,
    },
    GAG: {
      // GET ALL GENRES
      ...state,
      allGenres: action.payload,
    },
    GAP: {
      // GET ALL PLATFORMS
      ...state,
      allPlatforms: action.payload,
    },
    GAS: {
      // GET ALL STORES
      ...state,
      allStores: action.payload,
    },
    CT: {
      //COMPONENT TOGGLE
      ...state,
      [action.in]: action.payload,
    },
    FG: {
      //FILTER GAMES
      ...state,
      filteredGames: action.payload,
      filteredGamesStatus: true,
    },
    FGR: {
      //FILTER GAMES RESET
      ...state,
      filteredGames: [],
      filteredGamesStatus: false,
      filterInSearch: false,
    },
    OG: {
      //ORDER GAMES
      ...state,
      orderedGames: action.payload,
      orderedGamesStatus: true,
    },
    OGR: {
      //ORDER GAMES RESET
      ...state,
      orderedGames: [],
      orderedGamesStatus: false,
      filterInSearch: false,
    },
  };

  return reducers[action.type] || { ...state };
}

const cardLibraryReducer = (state = {
  book: [],
  filters: []
}, action) => {
  switch (action.type){
    case "LOAD_FAMILY_FILTERS":
      let familyFilters = [];

      action.payload.forEach((data) => {
        let family = {
          id: data.id,
          name: data.name,
          isActive: data.isActive,
          type: 'family'
        }
        familyFilters.push(family);
      });

      state = {
        ...state,
        filters: familyFilters
      }
      break;

    case "TOGGLE_FAMILY_FILTER":
      let filterState = [...state.filters];

      let filter = filterState.find(filter => filter.id == action.payload);
      filter.isActive = !filter.isActive;

      state = {
        ...state,
        filters: filterState
      };
      break;
    case "TOGGLE_UPGRADE_CARDS":
      state = {
        ...state,
        upgradeCards: !state.upgradeCards
      };
      break;
    default:
      break;
  }

  return state;
};

export const filterBook = (state) => {
  let filteredBook = [];
  for (let filter of state.cardLibrary.filters) {
    if (filter.isActive) {
      let allCards = state.app.cardDatabase;
      let chunk = allCards.filter(card => card[filter.type].toLowerCase() === filter.name.toLowerCase());
      filteredBook = [...filteredBook, ...chunk];
    }
  }

  return filteredBook;
}

export default cardLibraryReducer;

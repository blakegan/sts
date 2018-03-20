const cardLibraryReducer = (state = {
  book: [],
  filters: []
}, action) => {
  switch (action.type){
    case "LOAD_FAMILY_FILTERS":
      let familyFilters = {};

      action.payload.forEach((data) => {
        let family = {
          id: data.id,
          name: data.name,
          isActive: data.isActive
        }
        familyFilters[data.id] = family;
      });

      state = {
        ...state,
        filters: familyFilters
      }
      break;

    case "TOGGLE_FAMILY_FILTER":
      let bookState = [...state.book];
      let filterState = {...state.filters};

      filterState[action.payload].isActive = !(filterState[action.payload].isActive);

      state = {
        ...state,
        book: bookState,
        filters: filterState
      };
      break;
    default:
      break;
  }

  return state;
};

export default cardLibraryReducer;

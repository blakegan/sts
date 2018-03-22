import cardDatabse from 'cardDatabase.json';

export function loadCardDatabase() {
  return dispatch => {
    dispatch({
      type: "LOAD_CARD_DATABASE_RECEIVED",
      payload: cardDatabse.cards
    });
  }
}

export function loadFamilyFilters() {
  const familyFilters = [
    {
      id: 1,
      name: "Red",
      isActive: true
    },
    {
      id: 2,
      name: "Green",
      isActive: true
    },
    {
      id: 3,
      name: "Colorless",
      isActive: true
    },
    {
      id: 4,
      name: "Curse",
      isActive: true
    },
    {
      id: 5,
      name: "Status",
      isActive: true
    },
  ];

  return dispatch => {
    dispatch({
      type: "LOAD_FAMILY_FILTERS",
      payload: familyFilters
    });
  }
}

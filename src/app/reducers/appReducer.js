const initialState = {
  app: {cardDatabase: []}
};

const appReducer = (state, action) => {
  if (typeof state === 'undefined') {
    return initialState;
  }

  switch (action.type){
    case "LOAD_CARD_DATABASE":
      let cardDatabase = [];

      action.payload.forEach( (data) => {
        let card = {
          id: data.id,
          art: data.art,
          cost: data.cost,
          isUpgrade: data.isUpgrade,
          family: data.family,
          name: data.name,
          rarity: data.rarity,
          text: data.text,
          type: data.type,
          upgrade: data.upgrade
        }
        cardDatabase.push(card);
      });

      state = {
        ...state,
        app: {cardDatabase}
      };
      break;
    default:
      break;
  }
  
  return state;
};

export default appReducer;

export function loadCardDatabase() {
  const firebaseRef = window.firebase.database().ref('/cards');

  return dispatch => {
    dispatch({
      type: "LOAD_CARD_DATABASE_REQUEST",
      payload: null
    });

    firebaseRef
      .once("value", (snapshot) => {
        dispatch({
          type: "LOAD_CARD_DATABASE_RECEIVED",
          payload: snapshot.val()
        });
    });
  }
}

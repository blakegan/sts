export function loadCardDatabase() {
  const firebaseRef = window.firebase.database().ref('/cards');

  return dispatch => {
      firebaseRef
        .once("value", (snapshot) => {
          dispatch({
            type: "LOAD_CARD_DATABASE",
            payload: snapshot.val()
          });
      });
  }
}

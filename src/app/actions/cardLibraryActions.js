export function toggleFamilyFilter(family) {
  return dispatch => {
    dispatch({
      type: "TOGGLE_FAMILY_FILTER",
      payload: family
    });
  }
}

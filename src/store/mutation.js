export default {
  CHANGE_CITY (state, city) {
    state.city = city
    try {
      localStorage.city = city
    } catch (error) {}
  }
}

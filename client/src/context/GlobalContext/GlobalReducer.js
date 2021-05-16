const reducer = (state, action) => {
    switch (action.type) {
      
      case "Change":
        return{
          ...state,
          video:action.payload
        }
      default:
        return state;
    }
  };

  export default reducer;
export const initialState = {
  index: null,
}

const professinalReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INDEX_PROFESSINAL': return { ...state, index: action.values };
    default: return state
  }
}

export default professinalReducer;

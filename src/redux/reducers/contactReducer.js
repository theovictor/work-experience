export const initialState = {
  index: null,
}

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INDEX_CONTACT': return { ...state, index: action.values };
    default: return state
  }
}

export default contactReducer;

export const initialState = {
  index: null,
}

const companieReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INDEX_COMPANIES': return { ...state, index: action.values };
    default: return state
  }
}

export default companieReducer;

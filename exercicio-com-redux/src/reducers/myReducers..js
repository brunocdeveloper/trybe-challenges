const INITIAL_STATE = { 
  data: 0
};

function myReducer(state = INITIAL_STATE, action) { 
  switch (action.type) {
    case 'INCREMENT':
      return {...state, data: state.data += action.value}
    default:
      return state;
  }
}

export default myReducer;

const initialState = {
  todos: []
}

const todosReducer = ( state = initialState, action ) => {
  switch (action.type) {
    case 'ALL_TODOS':
      return {...state, todos: action.payload.todos};
    default:
      return state;
  }
}

export default todosReducer;
const initialState = {
  data: [],
  loading: false,
  error: null,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_DATA':
      return { ...state, loading: true, error: null };
    case 'FETCH_DATA_SUCCESS':
      return { ...state, data: action.payload, loading: false };
    case 'FETCH_DATA_FAILURE':
      return { ...state, error: action.payload, loading: false };
    case 'ADD_TODO':
      return { ...state, data: [...state.data, action.payload] };
    case 'ADD_TODO_SUCCESS':
      return { ...state, data: [...state.data, action.payload] };
    case 'EDIT_TODO':
      return {
        ...state,
        data: state.data.map(todo =>
          todo.id === action.payload.id ? action.payload : todo
        )
      };
    case 'DELETE_TODO':
      return {
        ...state,
        data: state.data.filter(todo => todo.id !== action.payload)
      };
    default:
      return state;
  }
};

export default rootReducer;

const initialState = {
  data: [],
  loading: false,
  errorOnAdd: null,
}

export default function favorites(state = initialState, action) {

  switch (action.type) {
    case 'ADD_FAVORITE_REQUEST':
      return {
        ...state,
        loading: true,
      }
    case 'ADD_FAVORITE_SUCCESS':
      return {
        loading: false,
        errorOnAdd: null,
        data: [...state.data, action.payload.repository],
      };
    case 'ADD_FAVORITE_ERROR':
      return {
        ...state,
        loading: false,
        errorOnAdd: action.payload.message,
      };
    default:
      return state;
  };

}


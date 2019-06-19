import { FETCHING, SUCCESS, FAILURE} from "../actions";
const initialState = {
  characters: [],
  isFetching: false,
  error: null
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case FETCHING:
      return {
        characters: [],
        error: null,
        isFetching: true
      };
      case SUCCESS:
        console.log(action.payload.results)
        return {
          characters: action.payload.results,
          isFetching: false,
          error: null
        };
        case FAILURE:
          return {
            characters: [],
            error: 'There was an error in retrieving the requested information',
            isFetching: false
          }
    default:
      return state;
  }
};

import { combineReducers } from "redux";
import _ from "lodash";
import {
  GET_MOVIE,
  GET_NOW_PLAYING,
  GET_ERROR,
  GET_TOP_RATED,
  GET_UPCOMING_MOVIES,
  GET_POPULAR_MOVIES,
  //REMOVE
  GET_DETAILS,
  GET_VALUES
} from "../actions";

const initialState = {
  movies: [],
  subheader: "",
  hasErrored: "No Errors ☺",
  //remove
  details: [],
  values: []
};

const reducer = (state = initialState, action) => {
  let newState = _.cloneDeep(state);
  switch (action.type) {
    case GET_MOVIE:
      newState.movies = action.payload;
      console.log("GET_MOVIE action returned:", newState.movies);
      return newState;
    case GET_NOW_PLAYING:
      newState.movies = action.payload;
      console.log("GET_NOW_PLAYING action returned:", newState.movies);
      newState.subheader = "NOW PLAYING";
      return newState;
    //REMOVE
    case GET_DETAILS:
      newState.details = action.payload;
      console.log(newState.details);
      return newState;
    case GET_VALUES:
      newState.values = action.payload;
      console.log(newState.values);
      return newState;
    case GET_TOP_RATED:
      newState.movies = action.payload;
      return newState;
    case GET_UPCOMING_MOVIES:
      newState.movies = action.payload;
      return newState;
    case GET_POPULAR_MOVIES:
      newState.movies = action.payload;
      return newState;
    case GET_ERROR:
      newState.hasErrored = action.payload;
      console.log("GET_ERRORS action return:", newState.errors);
      return newState;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  titles: reducer
});

export default rootReducer;

import { configureStore } from "@reduxjs/toolkit";
import { songsReducer, addSong, removeSong } from "./slices/songsSlice";
import { moviesReducer, addMovie, removeMovie } from "./slices/moviesSlice";
import { reset } from "./actions";

const store = configureStore({
  reducer: {
    songs: songsReducer,
    movies: moviesReducer
  }
});

// store.dispatch({
//   type:'song/AddSong',
//   payload: "new song!!"
// })
// same like
// store.dispatch(songsSlice.actions.addSong("new song!!"))
//makanya yang kita export seperti ini

export { store, addSong, removeSong, addMovie, removeMovie, reset };

import React, { useState } from "react";
import { Route } from "react-router-dom";
import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";
import UpdateForm from './Movies/UpdateForm';
import AddMovieForm from "./Movies/AddMovieForm";

const App = () => {
  const [savedList, setSavedList] = useState([]);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  return (
    <>
      <SavedList list={savedList} />
      
      
      <Route exact path="/" component={MovieList} />
      <Route
        path="/movies/:id"
        render={props => {
          return <Movie {...props} addToSavedList={addToSavedList} />;
        }}
      />
      {/* Add UpdateForm route here --> /update-movie/:id */}
      <Route 
        path='/update-movie/:id'
        render={props => {
          return <UpdateForm {...props} savedList={savedList} updateSavedList={setSavedList} />
        }}
      />
    </>
  );
};

export default App;

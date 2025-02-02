import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";
import AddMovieForm from "./AddMovieForm";


export default class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/movies")
      .then(res => this.setState({ movies: res.data }))
      .catch(err => console.log(err.response));
  }

  //needed this for a new render???
  componentDidUpdate(){
    axios
    .get("http://localhost:5000/api/movies")
    .then(res => this.setState({ movies: res.data }))
    .catch(err => console.log(err.response));
  }

  render() {
    return (
      <div className="movie-list">
        {/* <AddMovieForm /> */}
        {this.state.movies.map(movie => (
          <MovieDetails key={movie.id} movie={movie}  />
        ))}
      </div>
    );
  }
}

function MovieDetails({ movie, history }) {
  return (
    
    <Link to={`/movies/${movie.id}`}>
      <MovieCard movie={movie} history={history} />
    </Link>
  );
}

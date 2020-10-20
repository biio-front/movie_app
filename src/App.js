import React, { Component } from "react";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";

class App extends Component {
  state = {
    isLoading: true, //mount 되고 난 후 true
    movies: [],
  };

  //render하고나서 제일 먼저 실행되는 것
  //didmount에서 data fetch할거임

  getmovies = async () => {
    //axios는 fetch위의 layer와 같음....음...?
    //axios가 데이터를 가져오는데 시가이 걸릴수도 있으므로, 시간이 거릴룻 있다는걸 알려주어야함.
    //>>> async(이 함수가 비동기)와 await(await axios == axios 기다림)추가

    // const moives = await axios.get("http://yts-proxy.now.sh/list_movies.json");
    // console.log(moives.data.data.movies);
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "http://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    this.setState({ movies, isLoading: false });
  };

  componentDidMount() {
    this.getmovies();
  }

  render() {
    const { isLoading, movies } = this.state;
    // isLoading from this.state
    ///EC6 나중에 확인해보기!!!!!!!!!!!!!
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader_text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map(movie => {
              return (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                  runtime={movie.runtime}
                  rating={movie.rating}
                  genres={movie.genres}
                />
              );
            })}
          </div>
        )}
      </section>
    );
  }
}

export default App;

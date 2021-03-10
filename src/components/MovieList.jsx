import { useEffect } from "react";
import { connect } from "react-redux";
import Movie from "./Movie";
import {getMovies} from '../redux/actions';
import Loader from "./Loader";
import { Search } from "./Serach";
const MovieList = (props) => {
    useEffect(() => {
        props.getMovies('man', 1)
      }, [])

    return (
        <>
        <Search />
          {props.isLoading ? <Loader /> : null}
            <div className='movies-list'>
                    {(props.movies)? props.movies.map(i => <Movie key={i.imdbID + Math.random()} data={i} />) : 'no'}
            </div>
        </>
    )
}

const mapDispatch = state => {
    return {
      movies: state.movies,
      isLoading: state.isLoading,
    }
  }
  
  export default connect(mapDispatch, {
    getMovies
  })(MovieList);
  
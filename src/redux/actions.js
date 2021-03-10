import { Service } from "../service/Service"
import { GET_MOVIES, IS_LOADING, SAVE_MOVIE, TOTAL_RESULTS } from "./types"

const setMovieList = movies => ({
    type: GET_MOVIES,
    movies
})

const isLoading = (val) => ({
    type: IS_LOADING,
    val
})

const totalResults = total => ({
    type: TOTAL_RESULTS,
    total
})

export const saveMovie = movie => ({
    type: SAVE_MOVIE,
    movie
})

export const getTotalResults = (movie) => dispatch => {
    Service.getTotalRes(movie)
        .then(data => {
            dispatch(totalResults(data))
        })
}

export const getMovies = (movie='man', page=1) => dispatch => {
    dispatch(isLoading(true))
    Service.getMovies(movie, page)
        .then(response => {
            return response.json()
        })
        .then(data => {
            console.log(data.Search);
            dispatch(setMovieList(data.Search))
            dispatch(isLoading(false))
        })
}
import { GET_MOVIES, IS_LOADING, TOTAL_RESULTS } from "./types";

const initialState = {
    movies: [],
    isLoading: false,
    totalResults: null,
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_MOVIES:
            return {
                ...state,
                movies: [
                    
                    ...action.movies
                ]
            }
        
        case IS_LOADING: 
            return {
                ...state,
                isLoading: action.val
            }

        case TOTAL_RESULTS:
            return {
                ...state,
                totalResults: action.total
            }
    
        default:
            return state;
    }
}
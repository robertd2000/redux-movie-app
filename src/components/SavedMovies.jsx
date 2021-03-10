import { useSelector } from "react-redux"
import Movie from "./Movie"

export const SavedMovies = () => {
    const savedMovies = useSelector(state => state.savedMovies)
    console.log(savedMovies);
    return (
        <div className='movies-list'>
            {
                savedMovies.map(i => <Movie key={i.imdbID + Math.random()} data={i} />)
            }
        </div>
    )
}
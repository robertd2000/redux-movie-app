import { useDispatch } from "react-redux"
import { saveMovie } from "../redux/actions"

const Movie = ({data}) => {
    const dispatch = useDispatch()
    return (
        <div className='movie-item'>
            <div>
                {data.Poster ?
                <img src={data.Poster} alt=""/>
                : <img src="http://underscoremusic.co.uk/site/wp-content/uploads/2014/05/no-poster.jpg" alt=""/>
                }
                <div>
                    <h2>Название фильма: {data.Title}</h2>
                    <h4>{data.Type}</h4>
                    <h3>Год выхода: {data.Year}</h3>
                    <button onClick={() => dispatch(saveMovie(data))} className='saveBtn' >Сохранить</button>
                </div>
            </div>
        </div>
    )
}

export default Movie
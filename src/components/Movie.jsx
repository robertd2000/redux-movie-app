const Movie = ({data}) => {
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
                </div>
            </div>
        </div>
    )
}

export default Movie
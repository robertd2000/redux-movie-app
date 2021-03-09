import { useEffect } from "react"
import { connect, useDispatch, useSelector } from "react-redux"
import { getTotalResults } from "../redux/actions"
import {getMovies} from '../redux/actions';

const Footer = (props) => {

    useEffect(() => {
        props.getTotalResults(props.movie)
    })
    let pages = []
    let total = Math.ceil(props.totalResults / 10)
    for (let i = 1; i <= total; i++) {
      pages.push(i)
    }

    const changePage = (id, movie) => {
        console.log(id, movie);
        props.getMovies(movie, id)
    }

    let pagesItem = pages.map(p => <span onClick={() => changePage(p, props.movie)} key={p} className='pageItem'> {p} </span>)
    
    return (
        <div>
            {pagesItem.length > 20 ? [...pagesItem.slice(0, 20), '...', pagesItem[pagesItem.length - 1]] : pagesItem}
        </div>
    )
}

const mapDispatch = state => {
    return {
        totalResults: state.totalResults,
    }
  }

export default connect(mapDispatch, {
    getTotalResults,
    getMovies,
})(Footer)
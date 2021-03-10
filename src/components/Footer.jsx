import { useEffect, useState } from "react"
import { connect, useDispatch, useSelector } from "react-redux"
import { getTotalResults } from "../redux/actions"
import {getMovies} from '../redux/actions';

const Footer = (props) => {

    const [page, setPage] = useState(1)
    useEffect(() => {
        props.getTotalResults(props.movie)
    })
    let pages = []
    let total = Math.ceil(props.totalResults / 10)
    for (let i = 1; i <= total; i++) {
      pages.push(i)
    }

    const update = id => {
        return setPage(id)
    }

    const changePage = (id, movie) => {
        update(id)
        props.getMovies(movie, id)
    }

    let pagesItem = pages.map(p => <span className={p == page ? 'pageItem active' : 'pageItem'} onClick={() => changePage(p, props.movie)} key={p}> {p} </span>)
    
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
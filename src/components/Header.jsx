import { Link } from "react-router-dom"

export const Header = () => {
    return (
        <div className='header'>
            <div className='headerInner'>
                <Link className='nav' to='/' >Поиск</Link>
                <Link className='nav' to='/savedMovies' >Сохраненные</Link>
            </div>

        </div>
    )
}
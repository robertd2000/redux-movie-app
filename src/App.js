import { Route } from 'react-router';
import './App.css';
import { Header } from './components/Header';
import MovieList from './components/MovieList';
import { SavedMovies } from './components/SavedMovies';



function App(props) {

  return (
    <div className="App">
      <Header />
      <Route path='/' exact component={MovieList} />
      <Route path='/savedMovies' exact component={SavedMovies} />
    </div>
  );
}

export default App
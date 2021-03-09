import './App.css';
import MovieList from './components/MovieList';
import { Search } from './components/Serach';



function App(props) {

  return (
    <div className="App">
      <Search />
      <MovieList />
    </div>
  );
}

export default App
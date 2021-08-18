import './App.css'
//  https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=83a857a3acbd26606e60baacfaf6155e
import Header from "./component/Header"
import Movie from "./component/Movie"
import axios from 'axios'
import Genre from "./component/Genre"
import Pagenation from "./component/Pagenation"
import Single from "./Single" 
import { useEffect, useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [movies, setMovies] = useState([])
  const [number, setNumber] = useState(1)
  const [moviNameS, setmovieNameS] = useState('')
  const url = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=83a857a3acbd26606e60baacfaf6155e&page=${number}`
  const url2 = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=83a857a3acbd26606e60baacfaf6155e&page`

  function handlesearching(value) {
    setmovieNameS(value)

    if (moviNameS) {
      axios.get(`https://api.themoviedb.org/3/search/movie?api_key=83a857a3acbd26606e60baacfaf6155e&query=${moviNameS}`).then((response) => {
        setMovies(response.data.results)
      });

    }
    else if (number > 1) {
      console.log("its greater")
      axios.get(url2).then((response) => {
        setMovies(response.data.results)
      });
    }
    else {
      axios.get(url).then((response) => {
        setMovies(response.data.results)
      });
    }



  }



  useEffect(() => {

    handlesearching(moviNameS);
    setmovieNameS('')

  }, [])


  return (
    <Router>
      <Switch>
    <div className="App">
    <Header moviename={handlesearching} />
    <Route exact path="/" >
      
      <Genre />
      <div className="movie_list"  >
        {
          movies.map((m) =>
          <Link to={`/${m.id}`}>
            <Movie key={m.id} title={m.original_title} image={m.backdrop_path} rate={m.vote_average} />
            </Link>
          )

        }
      </div>
      <div className="paginaton" >
        <div className="back">
          <h5 onClick={() => {
            if (number <= 0) {
              setNumber(1)
            }
            else {
              setNumber(number - 1)
            }
          }

          }>Back</h5>
        </div>
        <div className="number">
          <h5>{number}</h5>
        </div>

        <div className="next">
          <h5 onClick={() =>
            setNumber(number + 1)
          } >NextPage</h5>
        </div>
      </div>
      </Route >   

      <Route path="/:id" >
        <Single/>
        </Route>  
    </div>
    
 
    
        

    </Switch>
</Router>
  );
}

export default App;

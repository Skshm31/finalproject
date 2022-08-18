import {useState,useEffect} from 'react';
import axios from 'axios';
import {
  Link
} from "react-router-dom"
import './design.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './navbar';

function Home() {
    const [movies, setMovies] = useState([]);
    const [search,setSearch]=useState("");
    const searchfind=(event)=>{
           setSearch(event.target.value);
         }
    useEffect(() => {
      getMovies()
      }, [])   
    const getMovies = async () => {
        const moviesData = await axios.get(`https://www.omdbapi.com/?i=tt3896198&apikey=86479a88&s=batman`)
        setMovies(moviesData.data.Search);
    }
    return (
      <div className="container-fluid">
        <div className="row"><Navbar/></div>
         <div className="moviedisplay">
          {
            movies.map(movie => {return (<div className="col-4 carddesign"><div className="card shadow code2">
              <div className="inner">
                <img src={movie.Poster} alt=""className="card-img-top"/>
                </div>
              <div className="card-body text-center design">
                <h3 className="card-title">{movie.Title}</h3>
                <p className="card-text">
                  
                </p>
                <div className="btn btn-primary"><span className="buttonsize">More Details...</span></div>
              </div>
          </div></div>)})
          }</div>
        </div>
        
        
    )
}
export default Home;


                
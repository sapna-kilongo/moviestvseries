import React,{useEffect,useState} from 'react'
import ReactPlayer from 'react-player/youtube'
import axios from "axios"
import "./Single.css" 
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";
//https://www.youtube.com/watch?v=Ob4NC4D6zTU

function Single() {
    const [single, setsingle] = useState([])
    const [Triller, setTriller] = useState([])
   let {id}= useParams()
   //https://api.themoviedb.org/3/movie/157336?api_key={api_key}
    useEffect(()=>{
       axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=83a857a3acbd26606e60baacfaf6155e`).then((response)=>
             setTriller(response.data.results[response.data.results.length-1].key)
       //setTriller(response.data)
        //
     
       )
       axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=83a857a3acbd26606e60baacfaf6155e`).then((response)=>

       setsingle(response.data)
        //
     
       )





    },[])

    return (  
        <div className="SingleMovie" >
            <div className="top" >
                <div className="left_handle">
                    <img src={`https://image.tmdb.org/t/p/w500${single.backdrop_path}`} alt={single.title}/>
                    <div> <h6>{single.title}</h6> </div>
                </div>
                <div className="right_handle">
                    <div>
                         <h1>OverView</h1>
                         <h6>{single.overview}</h6>
                         
                          </div>
                    <table>
                            <tr>
                                <th>name</th>
                                <th>description</th>
                            </tr>
                            <tr>
                                <td>title</td>
                                <td>{single.title}</td>
                            </tr>
                            <tr>
                                <td>vote</td>
                                <td>:{single.vote_average}</td>
                            </tr>
                            <tr>
                                <td>popularity</td>
                                <td>:{single.popularity}</td>
                            </tr>
                            <tr>
                                <td>tagline</td>
                                <td>:{single.tagline}</td>
                            
                            </tr>
                            <tr>
                                <td>release date</td>
                                <td>:{single.release_date}</td>
                            
                            </tr>
                          
                    </table>
                </div>
                
               
                
            </div>

            <div className="middle" >
               <ReactPlayer
               width='100%'
               url={`https://www.youtube.com/watch?v=${Triller}`}/> 
                
            </div>
           
            
    
          
        </div>
    )
}

export default Single

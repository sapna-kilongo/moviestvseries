import {useState} from 'react'
import './Header.css'

function Header({moviename}) {
    const [name,setName]=useState('')

  
    function HandleSubmit(e){
        e.preventDefault();

        moviename(name)
       
   
       }



    return (
        <div className="Header">
            <div className="AppName" >
                <h5>MOViE123Series</h5>
            </div>
            <div className="AppName" >
            </div>
            <div className="Fieds" >
                  <form onSubmit={HandleSubmit}>
                    <input type="search" placeholder="search"  onChange={(e)=>setName(e.target.value)}/>
                  </form>
               
              
              
                {/* <div className="Buton">
                    <SearchOutlinedIcon />
                </div> */}


            </div>


        </div>
    )
}

export default Header

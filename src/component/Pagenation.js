import {useState} from 'react'
import "./Pagenation.css"

function Pagenation(page) {
    let count=0
    const [counter,setCounter]=useState(1)
    return (
        <div className="paginaton" >
            <div className="back">
                <h5 >Back</h5>
            </div>
            <div className="number">
                <h5></h5>
            </div>

            <div className="next">
                <h5>NextPage</h5>
            </div>
        </div>
    )
}

export default Pagenation

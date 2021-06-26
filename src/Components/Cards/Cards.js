import React from 'react';
import './card.css'

function Cards({Title, Year, imdbID, Type, Poster}) {
    return (
        <div className="card" style={{ width:"18rem", height:"73vh", borderRadius: "4%", marginTop:"2%"}}>
            <img src={Poster} className="card-img-top" alt="" />
            <div className="card-body">
                <hr/>
                <h3 className="card-title">{Title}</h3>
                <h5 className="card-title">{Year}</h5>
                <h5 className="card-title">{Type}</h5>
            </div>
        </div>
    )
}

export default Cards

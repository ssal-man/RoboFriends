import React from 'react';

const Card=({name,id,email})=>{
    return(
        <div className="dib bg-light-green br3 pa3 ma2 grow shadow-5 tc bw2">
            <img alt="photoooo" src={`https://robohash.org/${id}?200*200`}/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;
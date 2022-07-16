import React from "react";

const Card = ({name , id ,email , username}) => { // needs parameters within the brackets
    return(
        <div className="bg-light-green dib br3 pa3 ma2 grow shadow-5"> 
            <img alt='robots' src={`https://robohash.org/${id}?200x200`}/>
            <div>
                <h2>{name}</h2>
                <p>username: {username}</p>
                <p>email : {email}</p>
            </div>
        </div>
    )
}

export default Card;
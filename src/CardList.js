import React from "react";
import Card from "./Card";


const CardList = ({robots}) =>{ // destructuring

    return (
        <div>
            {
            robots.map((user,i) => {      //the second parameter we get in a map is the index
                return <Card key={i} id={robots[i].id} name={ robots[i].name} email={robots[i].email} username={robots[i].username} /> //key{i} just means giving each robocard a key 
            } )
            }
        </div>
    )
}
export default CardList;
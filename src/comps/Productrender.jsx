import React from "react";
import './Productrenderstyles.css'


function Productrender(props) {

    return(
        <div class='render-container'>
            <img src={props.albums.artwork} alt={props.albums.genre}/>
            <h3>{props.albums.artist} : {props.albums.title}</h3>
            <h4>£{props.albums.price}</h4>
            <h4>{props.albums.genre}</h4>
        </div>
    )
}

export default Productrender;
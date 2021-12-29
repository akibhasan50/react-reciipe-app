import React from 'react'

   
export default function Recipe({title,calories,ingredients,image}) {
   
    return (
        <div>
            <h1>{title}</h1>
            <p>caloriesm : {calories.toFixed(2)}</p>
            <img src={image} alt='ll'></img>
        </div>
    )
}

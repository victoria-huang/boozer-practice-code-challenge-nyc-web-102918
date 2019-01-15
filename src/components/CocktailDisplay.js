import React from 'react'

const CocktailDisplay = (props) => {
  return (
    props.active ?
    <div id="cocktail-display">
      <h1>{props.active.strDrink}</h1>
      <img
        src={props.active.strDrinkThumb}
        alt={props.active.strDrink}
        width='400px'
        length='400px'
      />
    </div> : null
  )
}

export default CocktailDisplay

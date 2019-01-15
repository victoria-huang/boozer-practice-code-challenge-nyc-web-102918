import React from 'react'

const Cocktail = (props) => {
  return (
    <li onClick={() => props.showDetails(props.idDrink)}>{ props.strDrink }</li>
  )
}

export default Cocktail

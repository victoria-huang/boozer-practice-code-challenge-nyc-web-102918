import React, { Component } from 'react'
import Cocktail from './Cocktail'

class CocktailsList extends Component {
  // renderCocktails = () => {
  //   return this.props.cocktails.map( (cocktail, index) => {
  //     return <Cocktail key={index} {...cocktail} />
  //   })
  // }

  render(){
    const cocktails = this.props.cocktails.map( (cocktail, index) => {
      return <Cocktail key={index} {...cocktail} showDetails={this.props.showDetails} />
    })

    return (
      <div id="cocktail-list">
        { cocktails }
      </div>
    )
  }
}

export default CocktailsList

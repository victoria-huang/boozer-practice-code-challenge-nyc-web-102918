import React, { Component } from 'react'
import CocktailsList from './CocktailsList'
import CocktailDisplay from './CocktailDisplay'
import Form from './Form'

class CocktailsContainer extends Component {
  state = {
    active: null,
    cocktails: []
  }

  componentDidMount() {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail')
    .then(r => r.json())
    .then(cocktails => this.setState({ cocktails: cocktails.drinks }))
  }

  showDetails = (cocktailId) => {
    this.setState({
      active: cocktailId
    })
  }

  currentCocktail = () => this.state.cocktails.find(cocktail => this.state.active === cocktail.idDrink)

  addCocktail = (drink) => { //drink is an OBJECT that represents STATE in FORM
    const newDrink = {
      strDrink: drink.drinkName,
      strDrinkThumb: drink.imageUrl,
      idDrink: Math.random(0, 1000000000000000000)
    }

    this.setState({
      cocktails: [...this.state.cocktails, newDrink]
    })
  }

  render(){
    return (
      <div className="container">
        <CocktailsList
          showDetails={this.showDetails}
          cocktails={this.state.cocktails}
        />
        <CocktailDisplay
          active={this.currentCocktail()}
        />
        <Form addCocktail={this.addCocktail} />
      </div>
    )
  }
}

export default CocktailsContainer

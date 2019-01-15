import React, { Component } from 'react'

class Form extends Component {
  state = {
    drinkName: '',
    imageUrl: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addCocktail(this.state)

    this.setState({
      drinkName: '',
      imageUrl: ''
    })
  }

  // handleImageChange = (event) => {
  //   this.setState({
  //     imageUrl: event.target.value
  //   })
  // }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Create a Cocktail</h3>

        <p>Name</p>
        <input
          name='drinkName'
          onChange={this.handleChange}
          type="text"
          value={this.state.drinkName}
        />

        <p>Image Url</p>
        <input
          name='imageUrl'
          onChange={this.handleChange}
          type="text"
          value={this.state.imageUrl}
        />


        <p><button> + </button></p>

        <input type="submit"/>
      </form>
    )
  }
}

export default Form

// Write your code here

import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {mangoesCount: 0, bananasCount: 0}

  onMangoesIncrement = () => {
    this.setState(prevState => ({mangoesCount: prevState.mangoesCount + 1}))
  }

  onBananasIncrement = () => {
    this.setState(prevState => ({bananasCount: prevState.bananasCount + 1}))
  }

  render() {
    const {mangoesCount, bananasCount} = this.state

    return (
      <div className="bg-container">
        <div className="fruits-container">
          <h1 className="heading">
            Bob ate {mangoesCount} mangoes
            {bananasCount} bananas
          </h1>
          <div className="fruits-images">
            <img
              className="Images"
              src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
              alt="mango"
            />
            <img
              className="Images"
              src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
              alt="banana"
            />
          </div>
          <div className="button-container">
            <button
              className="button"
              type="button"
              onClick={this.onMangoesIncrement}
            >
              Eat Mango
            </button>
            <button
              className="button btn"
              type="button"
              onClick={this.onBananasIncrement}
            >
              Eat Banana
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter

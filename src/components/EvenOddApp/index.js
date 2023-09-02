// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  onIncrement = () => {
    let num = Math.random() * 100
    num = Math.ceil(num)
    this.setState(prevState => ({count: prevState.count + num}))
  }

  render() {
    const {count} = this.state
    let res
    if (count % 2 === 0) {
      res = 'Even'
    } else {
      res = 'Odd'
    }
    return (
      <div className="container">
        <h1 className="heading">Count {count}</h1>
        <p className="count-para">Count is {res}</p>
        <button className="btn" onClick={this.onIncrement}>
          Increment
        </button>
        <p className="count-para para">
          Increase By Random Number Between 0 to 100
        </p>
      </div>
    )
  }
}
export default EvenOddApp

import './index.css'
import {Component} from 'react'

class Speedometer extends Component {
  state = {count: 0}

  onAccelerate = () => {
    this.setState(prevState => {
      if (prevState.count < 200) {
        return {count: prevState.count + 10}
      }
      return null
    })
  }

  onBrake = () => {
    this.setState(prevState => {
      if (prevState.count > 0) {
        return {count: prevState.count - 10}
      }
      return null
    })
  }

  render() {
    const {count} = this.state
    return (
      <div className="bgContainer">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
        />
        <h1 className="para1">Speed is {count}mph</h1>
        <p className="para2">Min Limit is 0mph, Max Limit is 200mph</p>
        <div className="btnContainer">
          <button
            onClick={this.onAccelerate}
            className="btn btn-blue"
            type="button"
          >
            Accelerate
          </button>
          <button
            onClick={this.onBrake}
            className="btn btn-transparent"
            type="button"
          >
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer

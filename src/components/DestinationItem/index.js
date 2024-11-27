// Write your code here
import {Component} from 'react'
import './index.css'

class DestinationItem extends Component {
  render() {
    const {item} = this.props
    const {name, imgUrl} = item
    return (
      <li className="destination-iteam">
        <img src={imgUrl} alt={name} />
        <p>{name}</p>
      </li>
    )
  }
}

export default DestinationItem

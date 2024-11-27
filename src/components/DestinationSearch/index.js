import {Component} from 'react'
import DestinationItem from '../DestinationItem'
import './index.css'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onChangeSearchElement = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {destinationsList} = this.props
    const {searchInput} = this.state
    const filteredList = destinationsList.filter(item =>
      item.name.includes(searchInput),
    )
    return (
      <div className="bg-conatiner">
        <h1>Destination Search</h1>
        <div>
          <input
            type="search"
            className="input-element"
            onChange={this.onChangeSearchElement}
          />
          <img
            className="search-icon"
            alt="search icon"
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
          />
        </div>

        <ul className="destination-container">
          {filteredList.map(eachItem => (
            <DestinationItem key={eachItem.id} item={eachItem} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch

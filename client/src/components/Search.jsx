import React from 'react'
import ReactDOM  from 'react-dom'

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ''
    }
    this.handleOnChange = this.handleOnChange.bind(this)
    this.handleOnSubmit = this.handleOnSubmit.bind(this)
  }

  handleOnChange(event) {
    this.setState({
      searchTerm: event.target.value
    })
  }

  handleOnSubmit(event) {
    this.props.search(this.state.searchTerm)
    event.preventDefault()
  }

  render() {
    return (
      <div>
        <input type="text" onChange={this.handleOnChange}/>
        <button type="submit" onClick={this.handleOnSubmit}>Search</button>
      </div>
    )
  }
}

export default Search
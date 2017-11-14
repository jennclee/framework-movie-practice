import React from 'react'
import ReactDOM  from 'react-dom'

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
  
    }
    this.handleOnChange = this.handleOnChange.bind(this)
    this.handleOnSubmit = this.handleOnSubmit.bind(this)
  }

  handleOnChange() {

  }

  handleOnSubmit() {

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
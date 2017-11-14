import React from 'react'
import ReactDOM  from 'react-dom'

class MovieDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
  
    }
  }

  render() {
    return (
      <div>
        <p>{this.props.movie.title}</p>
      </div>
    )
  }
}

export default MovieDetails
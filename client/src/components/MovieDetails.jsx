import React from 'react'
import ReactDOM  from 'react-dom'

class MovieDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
  
    }
  }

  render() {
  	const movieStyle = {
  		border: '1px solid gray',
  		margin: '5px',
  		textAlign: 'center'
  	}
    return (
      <div style={movieStyle}>{this.props.movie.title}</div>
    )
  }
}

export default MovieDetails
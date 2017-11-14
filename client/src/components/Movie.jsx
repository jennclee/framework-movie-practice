import React from 'react'
import ReactDOM  from 'react-dom'
import MovieDetails from './MovieDetails.jsx'

class Movie extends React.Component {
  constructor(props) {
  	super(props)
  	this.state = {

  	}
  }

  render() {
  	const movieList = new Map(this.props.movies)
  	return (
  	  <div>
  	    {this.props.movies.map( (movie, index) => { return <MovieDetails movie={movie} key={index}/> })}
      </div>
    )
  }
}

export default Movie
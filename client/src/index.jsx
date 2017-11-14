import React from 'react'
import ReactDOM  from 'react-dom'
import Movie from './components/Movie.jsx'


class MovieList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      movies: [
	    {title: 'Mean Girls'},
	    {title: 'Hackers'},
	    {title: 'The Grey'},
	    {title: 'Sunshine'},
	    {title: 'Ex Machina'}
	  ]
    }
  }

  render() {
    return (
      <Movie movies={this.state.movies} />
    )
  }
}

ReactDOM.render( <MovieList />, document.getElementById('app'))

import React from 'react'
import ReactDOM  from 'react-dom'
import Movie from './components/Movie.jsx'
import Search from './components/Search.jsx'


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

  search() {
  	// search functionality to search through movie list
  }

  render() {
    return (
      <div>
        <div id="navbar">
          <Search />
        </div>
        <div>
          <Movie movies={this.state.movies} />
        </div>
      </div>
    )
  }
}

ReactDOM.render( <MovieList />, document.getElementById('app'))

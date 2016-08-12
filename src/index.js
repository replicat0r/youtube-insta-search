import React from 'react'
import ReactDOM from 'react-dom'

import SearchBar from './components/search_bar'
const API_KEY = 'AIzaSyA48pouanEQKg2U9kJ6u139URgazMrmnio'

const App = function () {
  return(
    <div>
      <SearchBar />
    </div>
  )

}

ReactDOM.render(<App/>, document.querySelector('.container'))

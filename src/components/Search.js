import React from 'react'

function Search({ handleInput, search }) {
  return (
    <section className="searchbox-wrap">
      <input 
        className="searchbox" 
        type="text"
        onChange={handleInput} 
        onKeyPress = {search}
        placeholder="Search for a movie..."
      />
    </section>
  )
}

export default Search
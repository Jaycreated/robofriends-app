 import React from 'react'

 const SearchBox = ({ searchField,  searchChange }) => {
     return (
         <div className='pa2'>

         <input type='search'
           placeholder='search robots'
           className ='pa3 b--green bg-light-blue'
           onChange={searchChange} /> 
        </div>
     )
 }

 export default SearchBox   
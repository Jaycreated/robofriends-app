 import React from 'react'

const Card = (props) => {
     return (
         <div className= 'tc bg-light-green dib br3 pa4 ma2 bw2 grow shadow-8'>
            <img alt = 'robots' src = 'https://robohash.org/id?200x200'/>
          
        <div>
             <h2>{props.name}</h2>
             <p>{props.email}</p>
           </div>
         </div>
     );
};

export default Card;
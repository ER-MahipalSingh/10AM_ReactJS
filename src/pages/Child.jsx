import React from 'react'



const Child = ({name}) => {
    console.log(name);
    
  return (
    <div>
        <h1>Child Component</h1>
        <h2>Name: {name}</h2>
    </div>
  )
}

export default Child
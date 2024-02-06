import React, { useState, useEffect } from 'react'

function Character() { // ❗ Add the props
  // ❗ Create a state to hold whether the homeworld is rendering or not

  const [homeWorldShow, homeWorldHide] = useState('')
  // ❗ Create a "toggle" click handler to show or remove the homeworld

  useEffect(() => {
    onclick={homeWorldHide}
  }, homeWorldShow)
  return (
    <div>
      {/* Use the same markup with the same attributes as in the mock */
      
      }
    </div>
  )
}

export default Character



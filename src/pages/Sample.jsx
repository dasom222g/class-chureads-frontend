import React from 'react'
import Greeting from '../components/sample/Greeting'

const Sample = () => {
  // logic
  const handleButtonClick = (data) => {
    console.log("click!!", data)
  }

  // view
  return (
    <div>Sample
      <Greeting name="하경아" onButtonClick={handleButtonClick} />
      <Greeting name="최선영" onButtonClick={handleButtonClick} />
      <Greeting onButtonClick={handleButtonClick} />
    </div>
  )
}

export default Sample
import React from 'react'
import Card from './Card'
import { phoneData } from './data'

function DisplayPhoneCards() {
  return (
    <div>
      {phoneData.map((phone, index) => <Card key={index} {...phone} />)}
    </div>
  )
}

export default DisplayPhoneCards

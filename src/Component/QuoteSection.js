import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import React from 'react'

const QuoteSection = () => {
  return (
    <div className="section quote">
        <p className="qoute-text"><FontAwesomeIcon icon={faQuoteLeft}/> Food is everything we are.It's an extention of nationalist feeling,ethnic feeling,your persional history,your province,your region,your tribe,your grandma.It's inseparable from the get-go.</p>
        <p className='qoute-auther'>-Anthony Bourdain</p>
    </div>
  )
}

export default QuoteSection

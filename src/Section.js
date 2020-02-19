import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './Section.css'

const Section = ({ headline, text, icon }) => (
  <div className="section">
    <FontAwesomeIcon icon={icon} />
    <h2>{headline}</h2>
    <p>{text}</p>
  </div>
)

export default Section
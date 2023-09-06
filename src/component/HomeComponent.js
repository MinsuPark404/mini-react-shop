import React, { useState } from 'react'
import data from '../data'
import CardComponent from './CardComponent'

const HomeComponent = () => {

  const [shoes, setShoes] = useState(data);

  return (
    <div>
      <div className="main-bg"></div>
      <div className="container">
        <div className="row">
          {data.map((item, index) => <CardComponent value={{ shoes, index }} />)}
        </div>
      </div>      
    </div>
  )
}

export default HomeComponent
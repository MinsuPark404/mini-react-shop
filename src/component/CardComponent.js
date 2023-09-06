import React from 'react'

const CardComponent = (props) => {
  const shoes = props.value.shoes
  const index = props.value.index
  return (
      <div className="col-md-4">
        <img src={`https://codingapple1.github.io/shop/shoes${index+1}.jpg`} width="80%" />
        <h4>{shoes[index].title}</h4>
        <p>{shoes[index].price}</p>
      </div>      
  )
}

export default CardComponent
import React from 'react'

const CategoryItems = ({category}) => {
  const {image,title}=category;
  return (
    <div className="category-container">
    <div className='background-image' style={{backgroundImage:`url(${image})`}} />
    {/* <img /> */} 
    <div className='category-body-container'>
      <h2>{title}</h2>
      <p>shop Now</p>
    </div>
  </div>
  )
}

export default CategoryItems
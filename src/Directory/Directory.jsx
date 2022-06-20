import React from 'react'
import CategoryItems from '../Components/Category/CategoryItems'

const Directory = ({categories}) => {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <CategoryItems category={category} key={category.id}/>
      ))}

    </div>
  )
}

export default Directory
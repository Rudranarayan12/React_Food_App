import React from 'react'
import Customeimage from './Customeimage'

const RecipeCard = ({recipe}) => {
  return (
    
      <div className="recipe-card">
        <Customeimage imgSrc={recipe.image} pt="65%"/>
        <div className="recipe-card-info">
            <img className='auther-img' src={recipe.authorImg}alt="" />
            <p className="recipe-title">{recipe.title}</p>
            <p className="recipe-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ut doloribus qui odio voluptatem error dolores</p>
            <a className='view-btn' href="#!">VIEW RECIPE</a>
        </div>
      </div>
    
  )
}

export default RecipeCard
